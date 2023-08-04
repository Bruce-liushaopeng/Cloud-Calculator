const useNetworkRespondTime = (apiFetchTime: number) => {
    if (apiFetchTime < 400) return {color: '#1c950f'}
    if (apiFetchTime < 800) return {color: '#c5820e'}
    return {color: '#c5140e'}
}

export default useNetworkRespondTime