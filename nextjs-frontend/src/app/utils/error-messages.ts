export enum ErrorMessages {
  EMAIL_OR_USERNAME_TAKEN = "E-mail ou nome de usuário já estão em uso.",
  INVALID_CREDENTIALS = "Credenciais inválidas.",
  NETWORK_ERROR = "Erro de conexão. Verifique sua internet.",
  UNKNOWN_ERROR = "Ocorreu um erro inesperado. Tente novamente mais tarde.",
}

/**
 * Função para mapear erros do backend para mensagens amigáveis.
 * @param errorMessage Mensagem de erro retornada pelo backend.
 * @returns Mensagem de erro traduzida ou uma mensagem padrão.
 */
export function mapErrorMessage(errorMessage: string): string {
  if (errorMessage.includes("Email or Username are already taken")) {
    return ErrorMessages.EMAIL_OR_USERNAME_TAKEN;
  }

  if (errorMessage.includes("Invalid identifier or password")) {
    return ErrorMessages.INVALID_CREDENTIALS;
  }
  if (errorMessage.includes("Network Error")) {
    return ErrorMessages.NETWORK_ERROR;
  }
  return ErrorMessages.UNKNOWN_ERROR;
}
