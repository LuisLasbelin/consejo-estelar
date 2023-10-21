function toggleExpand(self) {
    let elements = self.parentElement.getElementsByClassName("expand-contract")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("expanded")
    }
}