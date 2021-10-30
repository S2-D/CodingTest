// class style
export default class Pagination {
  state = {
    currentPage: 1,
    totalItemCount: 0,
    pagePerItemCount: 20,
  };

  constructor(state) {
    this.state = { ...this.state, ...state };
    // console.log(this.state);
    this.render;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    // console.log(this.state);
    this.render();
  }

  render() {
    let span = "";
    const pages = Number(
      Math.ceil(this.state.totalItemCount / this.state.pagePerItemCount)
    );
    const currentPage = this.state.currentPage;
    let endPage = Number(Math.ceil(currentPage / 10)) * 10;
    const startPage = endPage - 9;

    if (pages < endPage) endPage = pages;
    for (let i = startPage; i <= endPage; i++) {
      if (currentPage === i) {
        span += `<span class="current-page">${i}</span>`;
      } else {
        span += `<span>${i}</span>`;
      }
    }

    const rootElement = document.createElement("div");
    const prevPage = `<span class="prev-page"></span>`;
    const nextPage = `<span class="next-page"></span>`;

    if (startPage > 1) rootElement.innerText += prevPage;
    rootElement.innerText += span;
    if (pages > endPage) rootElement.innerText += nextPage;

    return rootElement.innerText;
  }
}

// function style
// export default function Pagination() {
//   this.setState = () => {
//   }

//   this.render = () => {
//     return '<div><span>1</span><span>2</span></div>'
//   }
// }
