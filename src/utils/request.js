import fetch from 'isomorphic-unfetch'


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
}

function handleResponseData(data, toast=true) {
    const ret = {
        data,
        headers: {},
    }

    // 如果错误码 !== 0 默认弹出 toast
    if (toast && ret.data && ret.data.code !== 0) {
        // message.error(ret.data.msg)
        throw ret.data
    }
    return ret.data
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const request = {
    postJSON,
    get
}

async function postJSON (url,body,options={},toast=true) {
    const response = await fetch(url, {
        ...options,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    checkStatus(response)

    const data = await response.json()

    handleResponseData(data, toast)
}

async function get(url) {
    const response = await fetch(url)

    checkStatus(response)

    const data = await response.json()

    handleResponseData(data)
}

export default request
