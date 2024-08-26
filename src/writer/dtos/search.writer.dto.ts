import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchWriterDto {
    @IsUUID()
    @IsNotEmpty()
    @ApiProperty({ example: 'c1da046e-0ccc-48c8-bdd7-1ffea963eba1' })
    uuid!: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Iggy Pop' })
    name: string;
}