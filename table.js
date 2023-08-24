table.insertAdjacentHTML("afterBegin", `
<tr class="table-img">
<td></td>
<td><img src="${result[0].image}" /></td>
<td><img src="${result[1].image}" /></td>
<td class="fourth-row"><img src="${result[2].image}" /></td>
<td class="fifth-row"><img src="${result[3].image}" /></td>
<td class="sixth-row"><img src="${result[4].image}" /></td>
</tr>
<tr class="table-subtitle">
<td>Model</td>
<td>${result[0].subtitle}</td>
<td>${result[1].subtitle}</td>
<td class="fourth-row">${result[2].subtitle}</td>
<td class="fifth-row">${result[3].subtitle }</td>
<td class="sixth-row">${result[4].subtitle}</td>
</tr>
<tr class="table-category">
<td>Category</td>
<td>${result[0].category}</td>
<td>${result[1].category}</td>
<td class="fourth-row">${result[2].category}</td>
<td class="fifth-row">${result[3].category}</td>
<td class="sixth-row">${result[4].category }</td>
</tr>
<tr class="table-price">
<td>Price</td>
<td>${result[0].price}$</td>
<td>${result[1].price}$</td>
<td class="fourth-row">${result[2].price}$</td>
<td class="fifth-row">${result[3].price}$</td>
<td class="sixth-row">${result[4].price}$</td>
</tr>
<tr class="table-diagonal">
<td>Diagonal</td>
<td>${result[0].diagonal}</td>
<td>${result[1].diagonal}</td>
<td class="fourth-row">${result[2].diagonal}</td>
<td class="fifth-row">${result[3].diagonal}</td>
<td class="sixth-row">${result[4].diagonal}</td>
</tr>
<tr class="table-weight">
<td>Max load</td>
<td>${result[0].weight}</td>
<td>${result[1].weight}</td>
<td class="fourth-row">${result[2].weight}</td>
<td class="fifth-row">${result[3].weight}</td>
<td class="sixth-row">${result[4].weight}</td>
</tr>
<tr class="table-tv">
<td>TV</td>
<td>${result[0].TV}</td>
<td>${result[1].TV}</td>
<td class="fourth-row">${result[2].TV}</td>
<td class="fifth-row">${result[3].TV}</td>
<td class="sixth-row">${result[4].TV}</td>
</tr>
<tr class="table-color">
<td>Color</td>
<td>${result[0].color}</td>
<td>${result[1].color}</td>
<td class="fourth-row">${result[2].color}</td>
<td class="fifth-row">${result[3].color}</td>
<td class="sixth-row">${result[4].color}</td>
</tr>
`) 