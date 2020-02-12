function BlogText(value) {
    let text = ""
    if (value === 1){
        text = "entry 1"
    }
    else if (value === 2){
        text = "entry 2"
    }
    else if (value === 3){
        text = "entry 3"
    }
    else if (value === 4){
        text = "entry 4"
    }
    else if (value === 5){
        text = "entry 5"
    }
    else if (value === 6){
        text = "entry 6"
    }
    else if (value === 7){
        text = "entry 7"
    }
    else if (value === 8){
        text = "entry 8"
    }
    else if (value === 9){
        text = "entry 9"
    }
    else if (value === 10){
        text = "entry 10"
    }
    else {
        text = "cannot find blog entry"
    }
    return text
}

export default BlogText

