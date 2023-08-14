const posts  = [];
let indexPost = -1;
function add() {
    const tarefa = document.getElementById("tarefa").value;
}
if (indexPost == -1) {
    if (tarefa) {
        storePost(tarefa);
        cleanFields();
    }
} else {
    if (tarefa) {
        posts[indexPost] = {
            tarefa,
        };

        add();
        indexPost = -1;
        cleanFields();

    }
}

function storePost(tarefa) {
    const post = {
        tarefa,
    };
    posts.push(post);
    add();

}

function add() {
    document.getElementById("list").classList.remove("hidden");
    if (posts.length == 0) {
        document.getElementById("list").classList.add("hidden");
    }
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
    <div class="">
        <p><strong>Resumo:</strong>${post.tarefa}</p>
        <button onclick="editPost(${index})">Editar</button>
        <button onclick="removePost(${index})">Remover</button>
    </div>
        `;
    })

    document.getElementById("list").innerHTML = showContent;
}

function cleanFields() {
    document.getElementById("tarefa").value = "";
}

function editPost(index) {
    indexPost = index;

    const post = posts[index];

    document.getElementById("tarefa").value = post.tarefa;
}

function removePost(index) {
    posts.splice(index, 1);

    add();
}