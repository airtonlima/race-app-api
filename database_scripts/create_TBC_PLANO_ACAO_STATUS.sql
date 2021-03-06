SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TBC_PLANO_ACAO_STATUS](
	[ID_STATUS] [int] IDENTITY(1,1) NOT NULL,
	[STATUS_NOME] [varchar](200) NOT NULL,
	[FLG_ATIVO] [tinyint] NOT NULL,
	[USUARIO_CRIACAO] [int] NOT NULL,
	[DATA_CRIACAO] [datetime] NOT NULL,
	[FLG_STATUS_CONCLUSAO] [tinyint] NOT NULL,
 CONSTRAINT [PK_TBC_PLANO_ACAO_STATUS] PRIMARY KEY CLUSTERED 
(
	[ID_STATUS] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TBC_PLANO_ACAO_STATUS] ADD  CONSTRAINT [DF_TBC_PLANO_ACAO_STATUS_FLG_ATIVO]  DEFAULT ((1)) FOR [FLG_ATIVO]
GO
ALTER TABLE [dbo].[TBC_PLANO_ACAO_STATUS] ADD  CONSTRAINT [DF_TBC_PLANO_ACAO_STATUS_DATA_CRIACAO]  DEFAULT (getdate()) FOR [DATA_CRIACAO]
GO
ALTER TABLE [dbo].[TBC_PLANO_ACAO_STATUS] ADD  DEFAULT ((0)) FOR [FLG_STATUS_CONCLUSAO]
GO
