<template>
    <div class="form">
        <div class="form_text">
            Rellena el formulario y en breve te contactare.
        </div>
        <div class="form_container">
            <form class="form_container_inner" action="">
                <input class="form_container_inner_input" type="text" placeholder="NOMBRE">
                <input class="form_container_inner_input" type="text" placeholder="EMAIL">
                <input class="form_container_inner_input" type="text" placeholder="CONSULTA">
                <input class="form_container_inner_input form_container_inner_input--submit" type="submit" placeholder="ENVIAR">
            </form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.form{
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.form_container_inner{
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.form_container_inner_input{
    padding: .5em;
    border: 1px solid var(--white-soft);
}
input::placeholder {
    color: var(--white-soft);
}
.form_container_inner_input--submit{
    padding: .5em;
    border: 1px solid var(--white-soft);
    background: var(--white-soft);
    color: var(--color-primary);
    width: fit-content;
    margin-top: var(--margin-section);
}
</style>