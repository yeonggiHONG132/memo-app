import { test, expect } from '@playwright/test';

test.describe('메모 관리', () => {
  test('새 메모를 작성할 수 있다', async ({ page }) => {
    // 1. 메인 페이지에 접속합니다.
    await page.goto('/');

    // 2. 헤더에 있는 '새 메모' 버튼을 클릭합니다.
    await page.getByRole('button', { name: '새 메모' }).click();

    // 3. 메모 생성 폼(모달)이 나타나는지 확인합니다.
    await expect(page.getByRole('heading', { name: '새 메모 작성' })).toBeVisible();

    // 4. 제목 입력란에 "테스트 메모 제목"을 입력합니다.
    await page.getByPlaceholder('메모 제목을 입력하세요').fill('테스트 메모 제목');

    // 5. 내용 입력란에 "테스트 메모 내용입니다."를 입력합니다.
    // MDEditor는 특별한 구조를 가지므로, 내부 입력 영역을 직접 지정합니다.
    await page.locator('.w-md-editor-text-input').fill('테스트 메모 내용입니다.');

    // 6. 카테고리 선택 드롭다운에서 "일반"을 선택합니다.
    // '일반'은 `MEMO_CATEGORIES`에 정의된 표시 이름입니다.
    await page.getByLabel('카테고리').selectOption({ label: '일반' });

    // 7. '저장' 버튼을 클릭합니다.
    await page.getByRole('button', { name: '저장하기' }).click();

    // 8. 폼이 닫히고, 메모 목록에 방금 생성한 "테스트 메모 제목"이 보이는지 확인합니다.
    await expect(page.getByRole('heading', { name: '새 메모 작성' })).not.toBeVisible();
    
    // 생성된 메모가 목록에 나타날 때까지 잠시 기다립니다.
    await expect(page.getByText('테스트 메모 제목')).toBeVisible({ timeout: 5000 });
  });
});
