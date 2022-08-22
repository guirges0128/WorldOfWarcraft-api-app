export const checkStatus = (response) => {
    if (response) {
        return response;
    }
    throw new Error('unsucessful, either 404 or 500');
}

export const json = (response) => response.json();