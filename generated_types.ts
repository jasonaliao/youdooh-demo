export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      aspect_ratio: {
        Row: {
          aspect_ratio: number | null
          resolution: string | null
        }
        Insert: {
          aspect_ratio?: number | null
          resolution?: string | null
        }
        Update: {
          aspect_ratio?: number | null
          resolution?: string | null
        }
        Relationships: []
      }
      creative_dimension: {
        Row: {
          ad_duration: number | null
          allow_image: boolean | null
          allow_video: boolean | null
          aspect_ratio: number | null
          city: string | null
          created_at: string | null
          creative_dimension: string | null
          id: number | null
          latitude: number | null
          longitude: number | null
          media_owner: string | null
          media_type: string | null
          resolution: string | null
          site_name: string | null
          site_number: string | null
        }
        Insert: {
          ad_duration?: number | null
          allow_image?: boolean | null
          allow_video?: boolean | null
          aspect_ratio?: number | null
          city?: string | null
          created_at?: string | null
          creative_dimension?: string | null
          id?: number | null
          latitude?: number | null
          longitude?: number | null
          media_owner?: string | null
          media_type?: string | null
          resolution?: string | null
          site_name?: string | null
          site_number?: string | null
        }
        Update: {
          ad_duration?: number | null
          allow_image?: boolean | null
          allow_video?: boolean | null
          aspect_ratio?: number | null
          city?: string | null
          created_at?: string | null
          creative_dimension?: string | null
          id?: number | null
          latitude?: number | null
          longitude?: number | null
          media_owner?: string | null
          media_type?: string | null
          resolution?: string | null
          site_name?: string | null
          site_number?: string | null
        }
        Relationships: []
      }
      dimensions: {
        Row: {
          created_at: string | null
          height: number
          id: number
          width: number
        }
        Insert: {
          created_at?: string | null
          height: number
          id?: number
          width: number
        }
        Update: {
          created_at?: string | null
          height?: number
          id?: number
          width?: number
        }
        Relationships: []
      }
      media: {
        Row: {
          ad_duration: number | null
          allow_image: boolean | null
          allow_video: boolean | null
          city: string | null
          created_at: string | null
          id: number
          latitude: number
          longitude: number
          media_owner: string
          media_type: string
          resolution: string
          site_name: string
          site_number: string
        }
        Insert: {
          ad_duration?: number | null
          allow_image?: boolean | null
          allow_video?: boolean | null
          city?: string | null
          created_at?: string | null
          id?: number
          latitude: number
          longitude: number
          media_owner: string
          media_type: string
          resolution: string
          site_name: string
          site_number: string
        }
        Update: {
          ad_duration?: number | null
          allow_image?: boolean | null
          allow_video?: boolean | null
          city?: string | null
          created_at?: string | null
          id?: number
          latitude?: number
          longitude?: number
          media_owner?: string
          media_type?: string
          resolution?: string
          site_name?: string
          site_number?: string
        }
        Relationships: []
      }
      media_owner: {
        Row: {
          created_at: string | null
          id: number
          title: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          title?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          title?: number | null
        }
        Relationships: []
      }
      media_type: {
        Row: {
          created_at: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
