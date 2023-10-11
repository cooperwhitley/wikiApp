import apiUrl from "../apiConfig";
import axios from "axios";

// Index
export const getAllArticles = () => {
    return axios(`${apiUrl}/articles`)
}

// Show
export const getOneArticle = (id) => {
    return axios(`${apiUrl}/articles/${id}`)
}

// Create
export const createArticle = (user, newArticle) => {
    return axios({
        url: `${apiUrl}/articles`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { article: newArticle }
    })
}

// Update
export const updateArticle = (user, updatedArticle) => {
    return axios({
        url: `${apiUrl}/articles/${updatedArticle._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { article: updateArticle}
    })
}

// Delete
export const removeArticle = (user, articleId) => {
    return axios({
        url: `${apiUrl}/articles/${articleId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}