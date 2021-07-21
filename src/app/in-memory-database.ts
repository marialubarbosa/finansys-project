import { InMemoryDbService } from "angular-in-memory-web-api";

import {Category} from "./pages/categories/shared/category.model";
import {Entry} from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "Pagamentos de Contas da Casa"},
            {id: 2, name: "Saúde", description: "Plano de Saúde e Remédios"},
            {id: 3, name: "Lazer", description: "Cinema, parques, praia e etc"},
            {id: 4, name: "Salário", description: "Recebimento Salário"},
            {id: 5, name: "Freelas", description: "Trabalhos como freelancer"}
        ];
        const entries: Entry[] = [
            {id: 1, name: 'Gás de cozinha', description: 'teste', type: 'expense', amount: '95,00', date: '05/06/2021', paid: true, categoryId: categories[0].id, category: categories[0] } as Entry,
            {id: 2, name: 'Gás de cozinha', description: 'teste', type: 'revenue', amount: '95,00', date: '05/06/2021', paid: false, categoryId: categories[0].id, category: categories[0] } as Entry

        ]
        return { categories, entries }
    }
}