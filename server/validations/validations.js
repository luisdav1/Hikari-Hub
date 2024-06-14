
export const mangaValidation = ({name,author,description,chapters,category,img, email}) => {
    if (!name || !author || !description || !chapters || !category || !img || !email) {
        return {message:'Todos los campos son obligatorios!'}
    } else {
        return {}
    }
}