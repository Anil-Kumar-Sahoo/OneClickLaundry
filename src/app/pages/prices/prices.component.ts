import { Component } from '@angular/core';
import { TableComponent } from '../../components/reusable/table/table.component';
import { SearchBarComponent } from '../../components/reusable/search-bar/search-bar.component';
import { TabSwitcherComponent } from '../../components/reusable/tab-switcher/tab-switcher.component';
import { ModalComponent } from '../../components/reusable/modal/modal.component';
import { ButtonComponent } from '../../components/reusable/button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [
    TableComponent,
    SearchBarComponent,
    TabSwitcherComponent,
    ModalComponent,
    ButtonComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css',
})
export class PricesComponent {
  searchTerm = '';

  // ==================== Modal ====================
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  // ==================== Modal ====================

  DCedit(row: any) {
    this.openModal();
    console.log('Edit clicked:', row);
  }

  onEdit(row: any) {
    this.openModal();
    console.log('Edit clicked:', row);
  }

  onDelete(row: any) {
    console.log('Delete clicked:', row);
    this.tableData = this.tableData.filter((item) => item !== row);
  }

  onSearchTermChange(term: string): void {
    this.searchTerm = term;
  }

  tableData = [
    {
      srNo: 1,
      type: 'men',
      itemName: 'belt',
      price: 'Rs. 50',
      service: 'Iron',
      addons: 'None',
    },
    {
      srNo: 2,
      type: 'men',
      itemName: 'blazer / coat - long',
      price: 'Rs. 339',
      service: 'Dry Clean',
      addons: 'Perfume Wash',
    },
    {
      srNo: 3,
      type: 'men',
      itemName: 'blazer / coat - short',
      price: 'Rs. 229',
      service: 'Dry Clean',
      addons: 'None',
    },
    {
      srNo: 4,
      type: 'men',
      itemName: 'boots leather',
      price: 'Rs. 509',
      service: 'Polish',
      addons: 'Leather Conditioner',
    },
    {
      srNo: 5,
      type: 'men',
      itemName: 'cap ( casual / woolen )',
      price: 'Rs. 84',
      service: 'Wash',
      addons: 'Fabric Softener',
    },
    {
      srNo: 6,
      type: 'men',
      itemName: 'combo - shirt and pant',
      price: 'Rs. 129',
      service: 'Wash & Iron',
      addons: 'Starch',
    },
    {
      srNo: 7,
      type: 'men',
      itemName: 'dhoti / lungi ( silk )',
      price: 'Rs. 99',
      service: 'Steam Press',
      addons: 'None',
    },
    {
      srNo: 8,
      type: 'men',
      itemName: 'dhoti heavy',
      price: 'Rs. 139',
      service: 'Dry Clean',
      addons: 'Stain Removal',
    },
    {
      srNo: 9,
      type: 'men',
      itemName: 'dhoti normal',
      price: 'Rs. 89',
      service: 'Wash & Iron',
      addons: 'None',
    },
    {
      srNo: 10,
      type: 'men',
      itemName: 'formal and casual trousers / pants',
      price: 'Rs. 89',
      service: 'Iron',
      addons: 'Starch',
    },
    {
      srNo: 11,
      type: 'men',
      itemName: 'gloves ( leather )',
      price: 'Rs. 299',
      service: 'Dry Clean',
      addons: 'Leather Conditioner',
    },
    {
      srNo: 12,
      type: 'men',
      itemName: 'gloves ( woolen )',
      price: 'Rs. 59',
      service: 'Wash',
      addons: 'None',
    },
    {
      srNo: 13,
      type: 'men',
      itemName: 'handkerchief',
      price: 'Rs. 21',
      service: 'Wash',
      addons: 'Fragrance Boost',
    },
    {
      srNo: 14,
      type: 'men',
      itemName: 'hats',
      price: 'Rs. 106',
      service: 'Steam Clean',
      addons: 'None',
    },
    {
      srNo: 15,
      type: 'men',
      itemName: 'indo western',
      price: 'Rs. 589',
      service: 'Dry Clean',
      addons: 'Stain Removal',
    },
    {
      srNo: 16,
      type: 'men',
      itemName: 'jacket - faux fur long',
      price: 'Rs. 764',
      service: 'Dry Clean',
      addons: 'Anti-Fungal',
    },
    {
      srNo: 17,
      type: 'men',
      itemName: 'jacket - faux fur short',
      price: 'Rs. 679',
      service: 'Dry Clean',
      addons: 'Anti-Fungal',
    },
    {
      srNo: 18,
      type: 'men',
      itemName: 'jacket leather',
      price: 'Rs. 679',
      service: 'Leather Polish',
      addons: 'Perfume Wash',
    },
    {
      srNo: 19,
      type: 'men',
      itemName: 'jacket normal long',
      price: 'Rs. 199',
      service: 'Wash & Iron',
      addons: 'None',
    },
    {
      srNo: 20,
      type: 'men',
      itemName: 'jacket normal short',
      price: 'Rs. 169',
      service: 'Wash & Iron',
      addons: 'None',
    },
    {
      srNo: 21,
      type: 'men',
      itemName: 'jacket puffer long',
      price: 'Rs. 339',
      service: 'Dry Clean',
      addons: 'Anti-Fungal',
    },
    {
      srNo: 22,
      type: 'men',
      itemName: 'jacket puffer short',
      price: 'Rs. 254',
      service: 'Dry Clean',
      addons: 'Anti-Fungal',
    },
    {
      srNo: 23,
      type: 'men',
      itemName: 'jacket rexine',
      price: 'Rs. 254',
      service: 'Polish',
      addons: 'Rexine Conditioner',
    },
    {
      srNo: 24,
      type: 'men',
      itemName: 'jeans',
      price: 'Rs. 119',
      service: 'Wash',
      addons: 'None',
    },
    {
      srNo: 25,
      type: 'men',
      itemName: 'joggers',
      price: 'Rs. 149',
      service: 'Wash & Iron',
      addons: 'Fabric Softener',
    },
    {
      srNo: 26,
      type: 'men',
      itemName: 'kurta ( cotton )',
      price: 'Rs. 129',
      service: 'Iron',
      addons: 'Starch',
    },
    {
      srNo: 27,
      type: 'men',
      itemName: 'kurta ( silk )',
      price: 'Rs. 169',
      service: 'Dry Clean',
      addons: 'Perfume Wash',
    },
    {
      srNo: 28,
      type: 'men',
      itemName: 'kurta heavy',
      price: 'Rs. 199',
      service: 'Dry Clean',
      addons: 'Stain Removal',
    },
    {
      srNo: 29,
      type: 'men',
      itemName: 'kurta payjama ( heavy )',
      price: 'Rs. 279',
      service: 'Dry Clean',
      addons: 'Perfume Wash',
    },
    {
      srNo: 30,
      type: 'men',
      itemName: 'kurta payjama ( light )',
      price: 'Rs. 159',
      service: 'Wash & Iron',
      addons: 'None',
    },
    {
      srNo: 31,
      type: 'men',
      itemName: 'muffler ( woolen / pashmina )',
      price: 'Rs. 189',
      service: 'Steam Press',
      addons: 'None',
    },
    {
      srNo: 32,
      type: 'men',
      itemName: 'pagdi',
      price: 'Rs. 132',
      service: 'Steam Clean',
      addons: 'Fragrance Boost',
    },
    {
      srNo: 33,
      type: 'men',
      itemName: 'parka coat < fur inside > long',
      price: 'Rs. 249',
      service: 'Dry Clean',
      addons: 'Anti-Fungal',
    },
    {
      srNo: 34,
      type: 'men',
      itemName: 'parka coat < fur inside > short',
      price: 'Rs. 199',
      service: 'Dry Clean',
      addons: 'Anti-Fungal',
    },
    {
      srNo: 35,
      type: 'men',
      itemName: 'pocket square',
      price: 'Rs. 25',
      service: 'Iron',
      addons: 'None',
    },
    {
      srNo: 36,
      type: 'men',
      itemName: 'pyjama',
      price: 'Rs. 79',
      service: 'Wash',
      addons: 'Fabric Softener',
    },
    {
      srNo: 37,
      type: 'men',
      itemName: 'safari shirt & pant',
      price: 'Rs. 199',
      service: 'Iron',
      addons: 'Starch',
    },
    {
      srNo: 38,
      type: 'men',
      itemName: 'shawl - toosh',
      price: 'Rs. 849',
      service: 'Dry Clean',
      addons: 'Stain Removal',
    },
    {
      srNo: 39,
      type: 'men',
      itemName: 'shawl - pashmina',
      price: 'Rs. 599',
      service: 'Dry Clean',
      addons: 'Fragrance Boost',
    },
    {
      srNo: 40,
      type: 'men',
      itemName: 'shawl / lohi',
      price: 'Rs. 159',
      service: 'Wash',
      addons: 'None',
    },
    {
      srNo: 41,
      type: 'men',
      itemName: 'shawl / naga',
      price: 'Rs. 249',
      service: 'Dry Clean',
      addons: 'None',
    },
    {
      srNo: 42,
      type: 'men',
      itemName: 'sherwani',
      price: 'Rs. 339',
      service: 'Dry Clean',
      addons: 'Stain Removal',
    },
    {
      srNo: 43,
      type: 'men',
      itemName: 'shirt',
      price: 'Rs. 89',
      service: 'Iron',
      addons: 'Starch',
    },
    {
      srNo: 44,
      type: 'men',
      itemName: 'shirt & dhoti ( silk )',
      price: 'Rs. 139',
      service: 'Dry Clean',
      addons: 'Perfume Wash',
    },
    {
      srNo: 45,
      type: 'men',
      itemName: 'shoes leather / suede / nubuck',
      price: 'Rs. 449',
      service: 'Polish',
      addons: 'Sole Protection',
    },
    {
      srNo: 46,
      type: 'men',
      itemName: 'shoes sports',
      price: 'Rs. 299',
      service: 'Wash',
      addons: 'Sole Clean',
    },
    {
      srNo: 47,
      type: 'men',
      itemName: 'shorts',
      price: 'Rs. 59',
      service: 'Wash',
      addons: 'None',
    },
    {
      srNo: 48,
      type: 'men',
      itemName: 'socks pair',
      price: 'Rs. 39',
      service: 'Wash',
      addons: 'Anti-Bacterial',
    },
    {
      srNo: 49,
      type: 'men',
      itemName: 'suit 2 pc',
      price: 'Rs. 299',
      service: 'Dry Clean',
      addons: 'Perfume Wash',
    },
    {
      srNo: 50,
      type: 'men',
      itemName: 'suit 3 pc',
      price: 'Rs. 379',
      service: 'Dry Clean',
      addons: 'Perfume Wash',
    },
  ];
}
