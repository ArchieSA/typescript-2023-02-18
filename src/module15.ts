try {
  throw "";
  throw {};
  throw null;
  throw undefined;
} catch (error: unknown) {}

function getError(error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

export const test = "";
