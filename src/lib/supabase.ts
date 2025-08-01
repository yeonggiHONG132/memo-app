import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://idpecqosdpszvlmkutft.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkcGVjcW9zZHBzenZsbWt1dGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMTM1MjMsImV4cCI6MjA2OTU4OTUyM30.0U4ngjhCd0bVHbFPOSdflNsurP8jqCWfXmqZwiHuEB0'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types for TypeScript
export interface Database {
  public: {
    Tables: {
      memos: {
        Row: {
          id: string
          title: string
          content: string
          category: string
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          category: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          category?: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}