
export default {
    postAnswers : async function (url , body) {
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {},
                body: body
            })

            const result = await response.json();
        } catch (e) {
            console.error("Error occured during submitting answer", e)
        }
    }
}