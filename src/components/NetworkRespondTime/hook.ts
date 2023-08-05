const useNetworkRespondTime = (apiFetchTime: number) => {
    if (apiFetchTime < 600) return {color: '#1c950f'}
    if (apiFetchTime < 2000) return {color: '#c5820e'}
    return {color: '#c5140e'}
}

export default useNetworkRespondTime