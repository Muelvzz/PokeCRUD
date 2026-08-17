export interface SuccessResponse extends ApiError {
  data: unknown,
  totalItems?: number
}

export interface ApiError {
  status: number
  message: string
}
