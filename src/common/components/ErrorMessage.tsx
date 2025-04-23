import { Alert } from '@mui/material'
import React from 'react'

 //모델에 안 만든 이유는 이 컴포넌트에만 사용하기 때문
interface ErrorMessageProps {
  errorMessage: string;
};

const ErrorMessage = ({errorMessage}: ErrorMessageProps) => {
  return (
    <Alert severity='error'>
      {errorMessage}
    </Alert>
  )
}

export default ErrorMessage