import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContractDocument = HydratedDocument<Contract>;

@Schema()
export class Contract {
  // Número da Instância
  @Prop({ required: true })
  nrInst: number;

  // Número da Agência
  @Prop({ required: true })
  nrAgencia: number;

  // Código do Cliente
  @Prop({ required: true })
  cdClient: number;

  // Nome do Cliente
  @Prop({ required: true })
  nmClient: string;

  // Número do CPF/CNPJ do Cliente
  @Prop({ required: true })
  nrCpfCnpj: string;

  // Número do Contrato
  @Prop({ required: true })
  nrContrato: number;

  // Data de assinatura do Contrato (no formato YYYYMMDD)
  @Prop({ required: true })
  dtContrato: Date;

  // Quantidade de Prestações
  @Prop({ required: true })
  qtPrestacoes: number;

  // Valor Total do Contrato
  @Prop({ required: true })
  vlTotal: number;

  // Código do Produto
  @Prop({ required: true })
  cdProduto: string;

  // Descrição do Produto
  @Prop({ required: true })
  dsProduto: string;

  // Código da Carteira
  @Prop({ required: true })
  cdCarteira: number;

  // Descrição da Carteira
  @Prop({ required: true })
  dsCarteira: string;

  // Número da Proposta
  @Prop({ required: true })
  nrProposta: number;

  // Número da Prestação
  @Prop({ required: true })
  nrPresta: number;

  // Tipo de Prestação (Original, etc.)
  @Prop({ required: true })
  tpPresta: string;

  // Número Sequencial da Prestação
  @Prop({ required: true })
  nrSeqPre: number;

  // Data de Vencimento da Prestação (no formato YYYYMMDD)
  @Prop({ required: true })
  dtVctPre: Date;

  // Valor da Prestação
  @Prop({ required: true })
  vlPresta: number;

  // Valor de Mora
  @Prop({ required: true })
  vlMora: number;

  // Valor da Multa
  @Prop({ required: true })
  vlMulta: number;

  // Valor de Outros Acréscimos
  @Prop({ required: true })
  vlOutAcr: number;

  // Valor de IOF
  @Prop({ required: true })
  vlIof: number;

  // Valor de Desconto
  @Prop({ required: true })
  vlDescon: number;

  // Valor Atualizado
  @Prop({ required: true })
  vlAtual: number;

  // Identificador da Situação do Contrato
  @Prop({ required: true })
  idSituac: string;

  // Identificador da Situação da Venda
  @Prop({ required: true })
  idSitVen: string;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
