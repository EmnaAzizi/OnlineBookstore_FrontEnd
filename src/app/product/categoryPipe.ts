import { PipeTransform ,Pipe} from "@angular/core";
import { IProduct } from "./produit";

@Pipe({
    name: 'CatgFilter'
})
export class CategoryPipe implements PipeTransform {
    transform(value: IProduct[],filterBy :string) :IProduct[] {
        filterBy=filterBy ? filterBy.toLocaleLowerCase():null;
        return filterBy ? value.filter((product:IProduct)=>
    product.category.toLocaleLowerCase().indexOf(filterBy)!==-1):value ;
        
    }

    
}