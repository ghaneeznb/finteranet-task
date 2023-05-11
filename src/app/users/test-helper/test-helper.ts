import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';

export namespace TestHelper {
    export class primeTable {
        public static getTextAtCell(fixture: ComponentFixture<any>, gridName: string, col: number) {
            const query = `p-table[data-name=${gridName}] tbody tr td`;
            return TestHelper.FixtureExtension.queryAllBuilder(fixture, query)[col].nativeElement.innerText;
        }
    }

    export class FixtureExtension {
        public static queryAllBuilder(fixture: ComponentFixture<any>, query: string): any {
            return fixture.debugElement.queryAll(By.css(query));
        }
    }
}

