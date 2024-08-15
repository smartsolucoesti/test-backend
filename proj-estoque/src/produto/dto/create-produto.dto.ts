import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength, IsUrl } from "class-validator";

export class CreateProdutoDto {
    @IsString()
    @IsNotEmpty({ message: 'O nome do produto não pode estar vazio.' })
    @MaxLength(50, { message: 'O nome do produto deve ter no máximo 50 caracteres.' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'A referência não pode estar vazia.' })
    @MaxLength(50, { message: 'A referência deve ter no máximo 50 caracteres.' })
    referencia: string;

    @IsString()
    @IsNotEmpty({ message: 'A unidade de medida não pode estar vazia.' })
    unidade_medida: string;

    @IsNumber()
    @IsNotEmpty({ message: 'O valor de venda não pode estar vazio.' })
    @Min(0, { message: 'O valor de venda deve ser um número positivo.' })
    vlr_venda: number;

    @IsNumber()
    @IsOptional()
    @Min(0, { message: 'O estoque deve ser um número positivo.' })
    estoque?: number;

    @IsString()
    @IsOptional()
    fabricante?: string;

    @IsString()
    @IsOptional()
    municipio_fabricado?: string;

    @IsString()
    @IsOptional()
    uf_fabricado?: string;

    @IsString()
    @IsOptional()
    image_url?: string;
}