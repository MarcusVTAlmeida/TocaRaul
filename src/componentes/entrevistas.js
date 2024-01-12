const entrevistas = [
    {
        nome: 'Raul Seixas - Programa Raul Gil Clip Raríssimo 1983',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq3_vwup4l.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876970/Videos/Raul_Seixas_-_Programa_Raul_Gil_Clip_Rar%C3%ADssimo_1983_oaetgc.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista na Rádio Antena 1 FM',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq2_byjfcg.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877025/Videos/Raul_Seixas_-_Entrevista_na_R%C3%A1dio_Antena_1_FM_h8zx86.mp4'
    },
    {
        nome: 'Raul Seixas e Marcelo Nova - Entrevista no Aeroporto 2 de Julho 1988',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130897/Imagem/mq2_1_hdhqwj.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877037/Videos/Raul_Seixas_e_Marcelo_Nova_-_Entrevista_no_Aeroporto_2_de_Julho_1988_nrdh7g.mp4'
    },
    {
        nome: 'Raul Seixas Marília Gabriela Entrevista',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130897/Imagem/mq2_2_tg4vri.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876958/Videos/Raul_Seixas_Mar%C3%ADlia_Gabriela_Entrevista_mwqrqt.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista a Nelson Motta 04 07 1981',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130897/Imagem/mq2_3_o34dam.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876897/Videos/Raul_Seixas_-_Entrevista_a_Nelson_Motta_04_07_1981_c7uhov.mp4'
    },
    {
        nome: 'Raul Seixas e Marcelo Nova - Entrevista na Rádio Globo',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130897/Imagem/mq2_4_fr1k2c.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877043/Videos/Raul_Seixas_e_Marcelo_Nova_-_Entrevista_na_R%C3%A1dio_Globo_bg54yq.mp4'
    },
    {
        nome: `Raul Seixas 'Muito Louco' No Programa do Bolinha em 1987`,
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130897/Imagem/mq2_5_tooyjq.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876901/Videos/Raul_Seixas_Muito_Louco_No_Programa_do_Bolinha_em_1987_sc1ao8.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista Rádio Excelsior 1981',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130897/Imagem/mq2_6_dfpzdr.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877010/Videos/Raul_Seixas_-_Entrevista_R%C3%A1dio_Excelsior_1981_wxudxb.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista Rádio Brasil 2000 FM 1987',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_7_b2h5cg.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635880276/Videos/Raul_Seixas_-_Entrevista_R%C3%A1dio_Brasil_2000_FM_1987_uzqu2v.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista exclusiva em 1987',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_8_xgm4jl.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877017/Videos/Raul_Seixas_-_Entrevista_exclusiva_em_1987_u1ezkb.mp4'
    },
    {
        nome: 'Raul Seixas - Fala sobre sua saúde Entrevista FM Record 1988',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_9_aec6vy.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876958/Videos/Raul_Seixas_-_Fala_sobre_sua_sa%C3%BAde_Entrevista_FM_Record_1988_mtkgx9.mp4'
    },
    {
        nome: 'Raul Seixas - Fala sobre disco gravado nos Estados Unidos Entrevista 1981',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_10_hvtvfh.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876999/Videos/Raul_Seixas_-_Fala_sobre_disco_gravado_nos_Estados_Unidos_Entrevista_1981_gsteuu.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista no Programa - Música Popular Brasileira  1976',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_11_jscsq2.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876960/Videos/Raul_Seixas_-_Entrevista_no_Programa__M%C3%BAsica_Popular_Brasileira__1976_cqz5yp.mp4'
    },
    {
        nome: 'Raul Seixas e Marcelo Nova - Entrevista na Rádio Cidade 1989',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_12_xu0xd3.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877041/Videos/Raul_Seixas_e_Marcelo_Nova_-_Entrevista_na_R%C3%A1dio_Cidade_1989_oekbrh.mp4'
    },
    {
        nome: 'Raul Seixas Dialogando com seu irmão 1964',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_13_f1lqkx.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876973/Videos/Raul_Seixas_Dialogando_com_seu_irm%C3%A3o_1964_ogtla2.mp4'
    },
    {
        nome: 'Raul Seixas e Zé Ramalho 1984',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_14_t33zay.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877004/Videos/Raul_Seixas_e_Z%C3%A9_Ramalho_1984_wrsyqr.mp4'
    },
    {
        nome: 'Raul Seixas falando sobre a morte de John Lennon e o encontro que teve com ele',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_15_ecs9pg.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876907/Videos/Raul_Seixas_-_falando_sobre_a_morte_de_John_Lennon_e_o_encontro_que_teve_com_ele._ag7y7i.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista na rádio Eldorado FM',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_16_wymhuh.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635880258/Videos/Raul_Seixas_-_Entrevista_na_r%C3%A1dio_Eldorado_FM_rllcz9.mp4'
    },
    {
        nome: 'Raul Seixas - Gravações Raras',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_17_lnyhel.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876998/Videos/Raul_Seixas_-_Grava%C3%A7%C3%B5es_Raras_ag3jtk.mp4'
    },
    {
        nome: 'O MALUCO BELEZA RAUL SEIXAS EM APRESENTAÇÕES EM PROGRAMAS DE TVS DOS ANOS 80',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_18_rqf8pi.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876904/Videos/O_MALUCO_BELEZA_RAUL_SEIXAS_EM_APRESENTA%C3%87%C3%95ES_EM_PROGRAMAS_DE_TVS_DOS_ANOS_80_khneme.mp4'
    },
    {
        nome: 'RAUL SEIXAS NO PROGRAMA DO JÔ SOARES COMPLETO  A ULTIMA ENTREVISTA',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_19_hmsesi.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876998/Videos/RAUL_SEIXAS_NO_PROGRAMA_DO_J%C3%94_SOARES_COMPLETO_A_ULTIMA_ENTREVISTA_wjdexu.mp4'
    },
    {
        nome: 'RAUL SEIXAS EM MARILIA GABRIELA 1985 COMPLETO',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130898/Imagem/mq2_20_uepaz1.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876967/Videos/RAUL_SEIXAS_EM_MARILIA_GABRIELA_1985_COMPLETO_jkufye.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista a Pedro Bial 1983 - Completa',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq3_1_ln6i6k.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877033/Videos/Raul_Seixas_-_Entrevista_a_Pedro_Bial_1983_-_Completa_kacutv.mp4'
    },
    {
        nome: '📼 Raul Seixas - Compilado de Entrevistas do Acervo RRC © 1979',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq2_21_ysiuq9.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877002/Videos/Raul_Seixas_-_Compilado_de_Entrevistas_do_Acervo_RRC_1979_ooudlk.mp4'
    },
    {
        nome: 'Raul Seixas - Carpinteiro do Universo Domingão do Faustão 1989',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq2_22_xufcfs.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877003/Videos/Raul_Seixas_-_Carpinteiro_do_Universo_Doming%C3%A3o_do_Faust%C3%A3o_1989_qmfbzf.mp4'
    },
    {
        nome: 'Raul Seixas Nelson Motta Entrevista na íntegra',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq2_23_fgqjun.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876910/Videos/Raul_Seixas_Nelson_Motta_Entrevista_na_%C3%ADntegra_vldzvx.mp4'
    },
    {
        nome: 'Raul Seixas - Entrevista Hotel Bahia 1988',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq2_24_nxzptp.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877013/Videos/Raul_Seixas_-_Entrevista_Hotel_Bahia_1988_ft0jwn.mp4'
    },
    {
        nome: 'Gravado Em Casa Voz E Violão 1964 1988',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq2_25_ozsj1f.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877026/Videos/Gravado_Em_Casa_Voz_E_Viol%C3%A3o_1964_1988_batr05.mp4'
    },
    {
        nome: 'Raul Seixas Entrevista completa',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq2_26_clsioq.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876907/Videos/Raul_Seixas-Entrevista_completa_y8d1rj.mp4'
    },
    {
        nome: 'Entrevista com Raul Seixas em Joaçaba SC 1976',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq3_2_kvx06b.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635876955/Videos/Entrevista_com_Raul_Seixas_em_Joa%C3%A7aba_SC_1976_v1ziz4.mp4'
    },
    {
        nome: 'MARCELO NOVA entrevista RAUL SEIXAS',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq2_27_kjl2nt.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877042/Videos/MARCELO_NOVA_entrevista_RAUL_SEIXAS_bhxj7k.mp4'
    },
    {
        nome: 'Entrevista Exclusiva Raul Seixas - 1989',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631130899/Imagem/mq1_wqinkm.jpg',
        video: 'https://res.cloudinary.com/dib0twra5/video/upload/v1635877041/Videos/Raul_Seixas_e_Marcelo_Nova_-_Entrevista_na_R%C3%A1dio_Cidade_1989_oekbrh.mp4'
    },

]
export default entrevistas