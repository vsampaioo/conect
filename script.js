document.addEventListener('DOMContentLoaded', () => {
    const App = {
        state: {
            pacientes: [],
            alarmes: [],
            users: {
                medico: {
                    '123': {
                        crm: '123',
                        nome: 'Dr. Teste',
                        senha: '123'
                    }
                },
                agente: {
                    '123': {
                        id: '123',
                        nome: 'Agente Teste',
                        senha: '123'
                    }
                },
                paciente: {
                    '123': {
                        cpf: '123',
                        nome: 'Paciente Teste',
                        senha: '123'
                    }
                }
            },
            data: {
               
                medicamentos: ['Abacavir', 'Abemaciclib', 'Abaloparatida', 'Acebutolol', 'Acarbose', 'Acetazolamida', 'Acetil-L-carnitina', 'Ácido Acetilsalicílico', 'Acido Fólico', 'Ácido nicotínico', 'Aclidínio', 'Adalimumabe', 'Agomelatina', 'Albiglutida', 'Albumin', 'Alendronato', 'Alfacalcidol', 'Alirocumabe', 'Aliskiren', 'Allopurinol', 'Alogliptina', 'Alosetron', 'Alpha-Lipoico', 'Amantadina', 'Amilorida', 'Amiodarona', 'Amisulprida', 'Amitriptilina', 'Amlodipina', 'Amlodipina+Benazepril', 'Amoxicilina', 'Anacetrapibe', 'Anfetamina/Sal', 'Apixabana', 'Aripiprazol', 'Argatroban', 'Asenapina', 'Atomoxetina', 'Atorvastatina', 'Atorvastatina+Ezetimiba', 'Azatioprina', 'Azitromicina', 'Baclofeno', 'Baclofeno intratecal', 'Barnidipina', 'Baricitinibe', 'Benazepril', 'Bendroflumetiazida', 'Benralizumabe', 'Bempedoico', 'Bepridil', 'Betametasona', 'Bictegravir', 'Bimatoprosta', 'Biotina', 'Bisoprolol', 'Bivalirudina', 'Bosentan', 'Brimonidina', 'Brinzolamida', 'Bromocriptina', 'Budesonida', 'Budesonida oral', 'Bupropiona', 'Cabergolina', 'Calcitonina', 'Calcitriol', 'Cálcio + Vitamina D', 'Cálcio Carbonato', 'Candesartana', 'Cangrelor', 'Canagliflozina', 'Canagliflozina+Metformina', 'Capecitabina', 'Carbamazepina', 'Carbidopa/Levodopa', 'Carbonato de Lítio', 'Carvedilol', 'Certolizumabe', 'Cilostazol', 'Cinacalcete', 'Citalopram', 'Citrato de Cálcio', 'Clevidipina', 'Clobazam', 'Clobetasol', 'Clomipramina', 'Clonidina', 'Clopidogrel', 'Clortalidona', 'Clozapina', 'Cobalamina', 'Coenzima Q10', 'Colchicina', 'Colecalciferol', 'Colesevelam', 'Colestipol', 'Colestiramina', 'Complexo B', 'Condroitina', 'Cromo Picolinato', 'Ciclosporina', 'Ciclosporina oftálmica', 'Dabigatran etexilato', 'Dabigatrana', 'Daclatasvir', 'Dantroleno', 'Dapagliflozina', 'Darbepoetina alfa', 'Dasatinibe', 'Deferasirox', 'Deferoxamina', 'Denosumabe', 'Desogestrel', 'Desmopressina', 'Desvenlafaxina', 'Dexametasona', 'Digoxina', 'Diltiazem', 'Dipiridamol', 'Dipirona', 'Dolutegravir', 'Donepezila', 'Dorzolamida', 'Doxazosina', 'Doxepina', 'Drospirenona+Etinilestradiol', 'Dulaglutida', 'Duloxetina', 'Dupilumabe', 'Edoxabana', 'Efavirenz', 'Eliglustat', 'Eluxadolina', 'Elvitegravir', 'Emtricitabina', 'Empagliflozina', 'Empagliflozina+Linagliptina', 'Enalapril', 'Enalapril+Hidroclorotiazida', 'Enoxaparina', 'Entecavir', 'Eplerenona', 'Eprosartan', 'Ergocalciferol', 'Eritropoetina', 'Erlotinibe', 'Ertugliflozina', 'Escitalopram', 'Esmolol', 'Esomeprazol', 'Espironolactona', 'Estância', 'Estradiol', 'Estrogênio conjugado', 'Eszopiclona', 'Etanercepte', 'Ethosuximida', 'Etinilestradiol', 'Etravirina', 'Evolocumabe', 'Exenatida', 'Ezetimiba', 'Febuxostate', 'Felodipina', 'Fenofibrato', 'Fenitoina', 'Ferro (Sulfato Ferroso)', 'Ferro Polimaltose', 'Finerenona', 'Flecainida', 'Fluconazol', 'Fluoxetina', 'Fluticasona', 'Fluvastatina', 'Fondaparinux', 'Formoterol', 'Formoterol/Budesonida', 'Fosinopril', 'Fosfato de Sevelamer', 'Gabapentina', 'Galantamina', 'Gefitinibe', 'Gemfibrozila', 'Gliburida', 'Gliclazida', 'Glimepirida', 'Glipizida', 'Glucosamina', 'Goserelina', 'Golimumabe', 'Guanabenz', 'Guanfacina', 'Guselkumabe', 'Haloperidol', 'Heparina', 'Hidralazina', 'Hidroclorotiazida', 'Hydroxyurea', 'Ibandronato', 'Ibuprofeno', 'Icosapent Ethyl', 'Imatinibe', 'Imipramina', 'Indapamida', 'Infliximabe', 'Insulina Aspart', 'Insulina Degludeca', 'Insulina Detemir', 'Insulina Glargina', 'Insulina Glulisina', 'Insulina Lispro', 'Insulina NPH', 'Insulina Regular', 'Insulina U-500', 'Ipratrópio', 'Irbesartana', 'Iron sucrose', 'Isradipina', 'Isotretinoína', 'Itraconazol', 'Ivabradina', 'Ixekizumabe', 'L-Arginina', 'L-Carnitina', 'Lamivudina', 'Lamotrigina', 'Lanreotida', 'Lansoprazol', 'Latanoprosta', 'Ledipasvir', 'Leflunomida', 'Leuprorrelina', 'Levetiracetam', 'Levocarnitina', 'Levodopa/Carbidopa', 'Levofloxacino', 'Levomepromazina', 'Levonorgestrel', 'Levotiroxina', 'Linaclotida', 'Linagliptina', 'Liotironina', 'Liraglutida', 'Lisdexanfetamina', 'Lisinopril', 'Lithium', 'Lomitapida', 'Loperamida', 'Loratadina', 'Lorazepam', 'Losartana', 'Lovastatina', 'Lubiprostone', 'Lurasidona', 'Macitentan', 'Magnésio', 'Magnésio quelato', 'Maprotilina', 'Mecasermin', 'Medroxiprogesterona', 'Memantina', 'Mepolizumabe', 'Mesalazina', 'Metformina', 'Metformina+Saxagliptina', 'Methotrexate', 'Metildopa', 'Metilfenidato', 'Metimazol', 'Metoprolol', 'Metoprolol succinato', 'Metoprolol tartrato', 'Metronidazol tópico', 'Micofenolato de mofetila', 'Miglustat', 'Miglitol', 'Milrinona', 'Minoxidil', 'Mipomersen', 'Mirtazapina', 'Molisbdênio', 'Mononitrato de Isossorbida', 'Montelucaste', 'Multivitamínico', 'N-Acetilcisteína', 'Nadolol', 'Naltrexona', 'Nateglinida', 'Nebivolol', 'Nebivolol hidrocloridrato', 'Nevirapina', 'Niacina', 'Nicardipina', 'Nicorandil', 'Nifedipina', 'Nilotinibe', 'Nintedanibe', 'Nitisinona', 'Nitrato de isossorbida', 'Nitrato isossorbida de longa ação', 'Nitroglicerina', 'Norgestrel', 'Nortriptilina', 'Octreotide', 'Olanzapina', 'Olmesartana', 'Olmesartana+Hidroclorotiazida', 'Omalizumabe', 'Omega-3 (EPA/DHA)', 'Ômega-3', 'Omeprazol', 'Onabotulinumtoxina A', 'Orlistat', 'Oxcarbazepina', 'Oxprenolol', 'Palbociclib', 'Pantoprazol', 'Paroxetina', 'Patiromer', 'Pegvisomanto', 'Perampanel', 'Perfenazina', 'Perindopril', 'Perindopril+Indapamida', 'Pioglitazona', 'Pimavanserina', 'Pimecrolimo', 'Pimecrolimo tópico', 'Pimozida', 'Pirfenidona', 'Pitavastatina', 'Policosanol', 'Posaconazol', 'Potássio Cloreto', 'Pramipexol', 'Pramipexol ER', 'Pramlintida', 'Prasugrel', 'Pravastatina', 'Prazosin', 'Prednisona', 'Pregabalina', 'Procainamida', 'Propafenona', 'Propranolol', 'Propranolol CR', 'Propranolol LA', 'Propiltiouracil', 'Quetiapina', 'Quinapril', 'Raloxifeno', 'Raltegravir', 'Ramipril', 'Ranolazina', 'Rasagilina', 'Reboxetina', 'Repaglinida', 'Reslizumabe', 'Restasis (Ciclosporina)', 'Ribavirina', 'Ribociclib', 'Riociguat', 'Risedronato', 'Risperidona', 'Risankizumabe', 'Ritonavir', 'Rivastigmina', 'Rivaroxabana', 'Ropinirol', 'Ropinirol CR', 'Rosiglitazona', 'Rosuvastatina', 'Sacubitril/Valsartana', 'Salmeterol', 'Salmeterol/Fluticasona', 'SAMe (S-adenosylmethionine)', 'Saxagliptina', 'Secukinumabe', 'Selegilina', 'Selenio', 'Selexipag', 'Semaglutida', 'Sertindol', 'Sertralina', 'Setmelanotide', 'Sevelamer', 'Sildenafil', 'Simvastatina', 'Simvastatina+Ezetimiba', 'Sitagliptina', 'Sodium Zirconium Cyclosilicate', 'Sofosbuvir', 'Somatropina', 'Sorafenibe', 'Sotalol', 'Sparsentan', 'Spironolactona', 'Stiripentol', 'Sucralfato', 'Sulfassalazina', 'Sulfato de magnésio', 'Sunitinibe', 'Tacrolimo', 'Tacrolimo tópico', 'Tadalafil', 'Taspoglutida', 'Telmisartana', 'Telmisartana+Hidroclorotiazida', 'Temozolomida', 'Tenofovir alafenamida', 'Tenofovir disoproxil', 'Terazosina', 'Teriparatida', 'Terlipressina', 'Testosterona enantato', 'Theophylline', 'Tiamina (B1)', 'Ticagrelor', 'Timolol', 'Timolol oftálmico', 'Tiotrópio', 'Tizanidina', 'Tofacitinibe', 'Topiramato', 'Trandolapril', 'Travoprosta', 'Trazodona', 'Treprostinil', 'Tretinoína', 'Triamcinolona', 'Triamtereno', 'Trimetazidina', 'Upadacitinibe', 'Ursodeoxicolic', 'Ursodeoxicolic acid', 'Ustekinumabe', 'Valproato', 'Valproato de Sódio', 'Valsartana', 'Valsartana/Hidroclorotiazida', 'Vareniclina', 'Varfarina', 'Velpatasvir', 'Venlafaxina', 'Verapamil', 'Vildagliptina', 'Vorapaxar', 'Voriconazol', 'Warfarina', 'Zafirlucaste', 'Zidovudina', 'Zinco', 'Ziprasidona', 'Zolpidem', 'Zoledronato'],
                bairros: {
                    Aracaju: ["Atalaia", "Coroa do Meio", "Farolândia", "Aruana", "Jardins", "Salgado Filho", "São José", "Suíssa", "Centro", "13 de Julho", "Getúlio Vargas", "Cirurgia", "Pereira Lobo", "Dezoito do Forte", "Novo Paraíso", "Luzia", "Olaria", "Palestina", "Bugio", "Industrial", "Cidade Nova", "América", "Capucho", "Siqueira Campos", "São Conrado", "Jabotiana", "Santa Maria", "Aeroporto", "Porto Dantas", "Grageru", "Inácio Barbosa", "Marivan", "Ponto Novo", "Lamarão", "José Conrado de Araújo"],
                    Itabaiana: ["Anízio Amancio de Oliveira", "Área Rural de Itabaiana", "Bananeiras", "Centro", "Doutor José Milton Machado", "Mamede Paes Mendonça", "Marcela", "Marianga", "Miguel Teles de Mendonça", "Oviedo Teixeira", "Porto", "Queimadas", "Riacho Doce", "Rotary Club de Itabaiana", "São Cristóvão", "Serrano"],
                    Lagarto: ['Centro'],
                    "Nossa Senhora do Socorro": ["Albano Franco", "Boa Viagem", "Castelo", "Centro Histórico", "Fernando Collor", "Guajará", "Itacanema", "Jardim", "João Alves", "Mangabeira", "Marcos Freire I", "Marcos Freire II", "Marcos Freire III", "Novo Horizonte", "Pai André", "Palestina de Dentro", "Palestina de Fora", "Parque dos Faróis", "Piabeta", "Porto Grande", "Santa Cecília", "Santa Inês", "Santo Inácio", "São Brás", "Sobrado", "Taboca", "Taiçoca de Dentro", "Taiçoca de Fora"],
                    "São Cristovão": ["Centro", "Roza Else"],
                    Estância: ['Centro', 'Alagoas', 'Cidade Nova'],
                    Propriá: ['Centro'],
                    "Tobias Barreto": ['Centro'],
                    "Itaporanga D'Ajuda": ['Centro']
                }
            }
        },
        
        
        resizeImage(base64Str, maxWidth, callback) {
            const img = new Image();
            img.onload = () => {
                if (img.width <= maxWidth) {
                    callback(base64Str);
                    return;
                }
                const canvas = document.createElement('canvas');
                const scale = maxWidth / img.width;
                canvas.width = maxWidth;
                canvas.height = img.height * scale;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                callback(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.src = base64Str;
        },

        handlePhotoCapture(event) {
            const file = event.target.files[0];
            if (!file) return;

            const preview = document.getElementById('photo-preview');
            const dataInput = document.getElementById('r-foto-data');
            const placeholder = document.getElementById('photo-placeholder');

            const reader = new FileReader();
            reader.onload = (e) => {
                const imageDataUrl = e.target.result;
                
                
                this.resizeImage(imageDataUrl, 400, (resizedDataUrl) => {
                    dataInput.value = resizedDataUrl;
                    preview.src = resizedDataUrl;
                    preview.style.display = 'block';
                    if (placeholder) placeholder.style.display = 'none';
                });
            };
            reader.readAsDataURL(file);
        },

        init() {
            this.loadState();
            this.populateDatalists();
            this.attachEventListeners();
            this.setupAutocomplete();
            this.setupPacienteScreenEvents();
            this.startAlarmChecker();
            this.showScreen('screen-login');
        },
        showNotification(message, type = 'success') {
            const container = document.getElementById('notification-container');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.textContent = message;
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.animation = 'slideOutToast 0.4s ease-out both';
                setTimeout(() => toast.remove(), 400);
            }, 3000);
        },
        loadState() {
            this.state.pacientes = JSON.parse(localStorage.getItem('connect_pacientes')) || [];
            this.state.alarmes = JSON.parse(localStorage.getItem('connect_alarmes')) || [];
        },
        saveState() {
            localStorage.setItem('connect_pacientes', JSON.stringify(this.state.pacientes));
            localStorage.setItem('connect_alarmes', JSON.stringify(this.state.alarmes));
        },
        showScreen(screenId) {
    
            const backgroundMap = {
                'screen-login': 'bg-login',
                'screen-login-agente': 'bg-agente',
                'screen-login-medico': 'bg-medico',
                'screen-login-paciente': 'bg-paciente',
                'screen-registrar': 'bg-login',
                'screen-reg-agente': 'bg-agente',
                'screen-reg-medico': 'bg-medico',
                'screen-reg-paciente': 'bg-paciente',
                'screen-agente-menu': 'bg-agente',
                'screen-agente-form': 'bg-agente',
                'screen-agente-lista': 'bg-agente',
                'screen-medico': 'bg-medico',
                'screen-paciente': 'bg-paciente',
                'screen-paciente-lembretes': 'bg-paciente',
                'screen-paciente-videos': 'bg-paciente',
                'screen-paciente-medicacao': 'bg-paciente', 
                'screen-paciente-campanha': 'bg-paciente'
            };
            
            document.body.className = '';
            const newClass = backgroundMap[screenId] || 'bg-login';
            document.body.classList.add(newClass);
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            const screen = document.getElementById(screenId);
            if (screen) screen.classList.add('active');
        },
        populateDatalists() {
            const cidadeSelect = document.getElementById('r-cidade');
            cidadeSelect.addEventListener('change', () => {
                const cidade = cidadeSelect.value;
                const bairroSelect = document.getElementById('r-bairro');
                bairroSelect.innerHTML = '<option value="">Selecione o bairro</option>';
                (this.state.data.bairros[cidade] || []).forEach(bairro => {
                    const option = document.createElement('option');
                    option.value = bairro;
                    option.textContent = bairro;
                    bairroSelect.appendChild(option);
                });
            });
        },
        formatCPF(cpf) {
            cpf = cpf.replace(/\D/g, '');
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            return cpf;
        },
        attachEventListeners() {
            document.body.addEventListener('click', e => {
                const target = e.target;
                if (target.dataset.target) this.showScreen(target.dataset.target);
                const action = target.dataset.action;
                if (action) {
                    switch (action) {
                        case 'go-back-login':
                            this.showScreen('screen-login');
                            break;
                        case 'go-back-registrar':
                            this.showScreen('screen-registrar');
                            break;
                        case 'view-pastas':
                            this.renderPastas();
                            break;
                        case 'edit-patient':
                            this.toggleEditState(target.closest('.paciente-card'), true);
                            break;
                        case 'cancel-edit':
                            this.toggleEditState(target.closest('.paciente-card'), false);
                            break;
                    }
                }
                const header = target.closest('.paciente-header');
                if (header) {
                    const card = header.closest('.paciente-card');
                    
                    const isCampanhaScreen = target.closest('#screen-paciente-campanha');
                    if (isCampanhaScreen || !card.classList.contains('editing')) {
                        card.classList.toggle('open');
                    }
                }
                if (target.matches('.back-to-pastas')) this.renderPastas();
            });
            document.body.addEventListener('submit', e => {
                e.preventDefault();
                const form = e.target;
                const formId = form.id;
                if (formId.startsWith('form-login-')) this.handleLogin(form, formId.replace('form-login-', ''));
                if (formId.startsWith('form-reg-')) this.handleRegistro(form, formId.replace('form-reg-', ''));
                if (formId === 'form-paciente-novo') this.handleSalvarPaciente(form);
                if (form.matches('.form-edit-paciente')) {
                    this.handleEditarPaciente(parseInt(form.dataset.id, 10), form);
                }
            });

           
            document.getElementById('r-foto-input')?.addEventListener('change', (e) => {
                this.handlePhotoCapture(e);
            });
            

            document.getElementById('r-idade')?.addEventListener('input', e => {
                if (e.target.value.length > 3) e.target.value = e.target.value.slice(0, 3);
            });
            document.getElementById('r-pessoas')?.addEventListener('input', e => {
                if (e.target.value.length > 2) e.target.value = e.target.value.slice(0, 2);
            });
            ['paciente-cpf', 'r-cpf'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('input', (e) => {
                    e.target.value = this.formatCPF(e.target.value);
                });
            });
            ['medico-crm', 'agente-id'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('input', (e) => {
                    e.target.value = e.target.value.replace(/\D/g, '');
                });
            });
            document.getElementById('search-medico')?.addEventListener('input', e => {
                const termo = e.target.value.toLowerCase();
                const filtrados = this.state.pacientes.filter(p => p.nome.toLowerCase().includes(termo) || (p.cpf && p.cpf.includes(termo)));
                this.renderDashboardMedico(filtrados);
            });
            document.getElementById('r-comorbidade')?.addEventListener('change', e => document.getElementById('comorbidade-box').classList.toggle('hidden', !e.target.checked));
            document.getElementById('r-bebe')?.addEventListener('change', e => document.getElementById('bebe-box').classList.toggle('hidden', !e.target.checked));
            document.getElementById('r-fuma')?.addEventListener('change', e => document.getElementById('fuma-box').classList.toggle('hidden', !e.target.checked));
            document.getElementById('r-usa-medic')?.addEventListener('change', e => document.getElementById('med-box').classList.toggle('hidden', !e.target.checked));
            document.getElementById('r-alergia')?.addEventListener('change', e => document.getElementById('alergia-box').classList.toggle('hidden', !e.target.checked));
            document.getElementById('r-atividade')?.addEventListener('change', e => document.getElementById('atividade-box').classList.toggle('hidden', !e.target.checked));
        },
        handleLogin(form, role) {
            const idMap = {
                medico: 'crm',
                agente: 'id',
                paciente: 'cpf'
            };
            const idField = form.querySelector(`#${role}-${idMap[role]}`);
            const passField = form.querySelector(`#${role}-senha`);
            const idValue = idField.value.trim().replace(/\D/g, '');
            const user = this.state.users[role]?.[idValue];
            if (user && user.senha === passField.value) {
                this.showNotification('Login bem-sucedido!');
                if (role === 'agente') this.showScreen('screen-agente-menu');
                if (role === 'medico') {
                    this.renderDashboardMedico();
                    this.showScreen('screen-medico');
                }
                if (role === 'paciente') {
                    this.renderAlarmes();
                    this.showScreen('screen-paciente');
                }
            } else {
                this.showNotification('Credenciais inválidas.', 'error');
            }
        },
        handleRegistro(form, role) {
        
            const formData = new FormData(form);
            const newUser = Object.fromEntries(formData.entries());
            const idMap = {
                medico: 'crm',
                agente: 'id',
                paciente: 'cpf'
            };
            const idKey = idMap[role];
            const idValue = newUser[idKey].replace(/\D/g, '');
            if (this.state.users[role]?.[idValue]) return this.showNotification(`Erro: Já existe um ${role} com este ID/CPF/CRM.`, 'error');
            this.state.users[role][idValue] = newUser;
            this.showNotification(`${role.charAt(0).toUpperCase() + role.slice(1)} registrado com sucesso!`);
            this.showScreen('screen-login');
        },
        handleSalvarPaciente(form) {
        
            const nomeInput = form.querySelector('#r-nome');
            if (!/^[A-Za-zÀ-ú\s]+$/.test(nomeInput.value.trim())) {
                return this.showNotification('O campo "Nome completo" deve conter apenas letras e espaços.', 'error');
            }
            const fuma = form.querySelector('#r-fuma').checked;
            const cigarrosDia = fuma ? parseInt(form.querySelector('#r-cigarros-dia').value, 10) || 0 : 0;
            const anosFumando = fuma ? parseInt(form.querySelector('#r-anos-fuma').value, 10) || 0 : 0;
            const paciente = {
                id: Date.now(),
                data: new Date().toLocaleDateString('pt-BR'),
                foto: form.querySelector('#r-foto-data').value || '',
                nome: form.querySelector('#r-nome').value.trim(),
                idade: form.querySelector('#r-idade').value.trim(),
                peso: form.querySelector('#r-peso').value.trim(),
                cpf: form.querySelector('#r-cpf').value.trim(),
                pessoas: form.querySelector('#r-pessoas').value.trim(),
                cidade: form.querySelector('#r-cidade').value,
                bairro: form.querySelector('#r-bairro').value,
                endereco: form.querySelector('#r-endereco').value.trim(),
                comorbidade: form.querySelector('#r-comorbidade').checked,
                comorbidadeTipo: form.querySelector('#r-comorbidade').checked ? form.querySelector('#r-comorbidade-tipo').value.trim() : '',
                avc: form.querySelector('#r-avc').checked,
                infarto: form.querySelector('#r-infarto').checked,
                bebe: form.querySelector('#r-bebe').checked,
                bebeTipo: form.querySelector('#r-bebe').checked ? form.querySelector('#r-bebe-tipo').value.trim() : '',
                fuma: fuma,
                cigarrosPorDia: cigarrosDia,
                anosFumando: anosFumando,
                cargaTabagica: fuma ? (cigarrosDia / 20) * anosFumando : 0,
                medicamento: form.querySelector('#r-medic-search').value.trim(),
                alergia: form.querySelector('#r-alergia').checked,
                alergiaTipo: form.querySelector('#r-alergia').checked ? form.querySelector('#r-alergia-tipo').value.trim() : '',
                atividade: form.querySelector('#r-atividade').checked,
                atividadeTipo: form.querySelector('#r-atividade').checked ? form.querySelector('#r-atividade-tipo').value.trim() : '',
                atividadeFrequencia: form.querySelector('#r-atividade').checked ? form.querySelector('#r-atividade-frequencia').value : '',
            };
            if (!paciente.nome || !paciente.idade) return this.showNotification('Nome e idade são obrigatórios.', 'error');
            this.state.pacientes.push(paciente);
            this.saveState();
            this.showNotification('Paciente salvo com sucesso!');
            form.reset();

            const preview = document.getElementById('photo-preview');
            const placeholder = document.getElementById('photo-placeholder');

            if (preview) {
                preview.src = '';
                preview.style.display = 'none';
            }
            if (placeholder) {
                placeholder.style.display = 'block';
            }
            const fotoData = document.getElementById('r-foto-data');
            if (fotoData) fotoData.value = '';
            const fotoInput = document.getElementById('r-foto-input');
            if (fotoInput) fotoInput.value = '';

            ['comorbidade-box', 'bebe-box', 'fuma-box', 'med-box', 'alergia-box', 'atividade-box'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            this.showScreen('screen-agente-menu');
        },
        handleEditarPaciente(id, form) {
            const nomeInput = form.querySelector('[name="nome"]');
            if (!/^[A-Za-zÀ-ú\s]+$/.test(nomeInput.value.trim())) {
                this.toggleEditState(form.closest('.paciente-card'), false);
                return this.showNotification('O campo "Nome completo" deve conter apenas letras e espaços.', 'error');
            }
            const index = this.state.pacientes.findIndex(p => p.id === id);
            if (index === -1) return;
            const formData = new FormData(form);
            const updatedData = Object.fromEntries(formData.entries());
            const fuma = form.querySelector('[name="fuma"]').checked;
            const cigarrosDia = fuma ? parseInt(form.querySelector('[name="cigarrosPorDia"]').value, 10) || 0 : 0;
            const anosFumando = fuma ? parseInt(form.querySelector('[name="anosFumando"]').value, 10) || 0 : 0;
            this.state.pacientes[index] = { ...this.state.pacientes[index],
                ...updatedData,
                comorbidade: form.querySelector('[name="comorbidade"]').checked,
                avc: form.querySelector('[name="avc"]').checked,
                infarto: form.querySelector('[name="infarto"]').checked,
                bebe: form.querySelector('[name="bebe"]').checked,
                fuma: fuma,
                cigarrosPorDia: cigarrosDia,
                anosFumando: anosFumando,
                cargaTabagica: fuma ? (cigarrosDia / 20) * anosFumando : 0,
                alergia: form.querySelector('[name="alergia"]').checked,
                atividade: form.querySelector('[name="atividade"]').checked,
            };
            this.saveState();
            this.showNotification('Paciente atualizado!');
            this.toggleEditState(form.closest('.paciente-card'), false);
        },
        handleExcluirPaciente(id) {
            if (!confirm('Tem certeza que deseja excluir este paciente?')) return;
            const dataPaciente = this.state.pacientes.find(p => p.id === id)?.data;
            this.state.pacientes = this.state.pacientes.filter(p => p.id !== id);
            this.saveState();
            this.showNotification('Paciente excluído.');
            this.renderListaPacientes(dataPaciente);
        },
        renderPastas() {
            const screen = document.getElementById('screen-agente-lista');
            const container = screen.querySelector('#lista-container');
            screen.querySelector('.back-to-pastas')?.remove();
            screen.querySelector('h3.dynamic-title')?.remove();
            screen.querySelector('.search-input')?.remove();
            container.innerHTML = '<h3>Pastas por Data</h3>';
            if (!this.state.pacientes.length) {
                container.innerHTML += '<p>Nenhum paciente cadastrado.</p>';
            } else {
                const agrupados = this.state.pacientes.reduce((acc, p) => {
                    (acc[p.data] = acc[p.data] || []).push(p);
                    return acc;
                }, {});
                container.innerHTML = '<h3>Pastas por Data</h3>';
                Object.keys(agrupados).sort((a, b) => new Date(b.split('/').reverse().join('-')) - new Date(a.split('/').reverse().join('-'))).forEach(data => {
                    const folder = document.createElement('div');
                    folder.className = 'date-folder';
                    folder.textContent = `${data} — ${agrupados[data].length} paciente(s)`;
                    folder.onclick = () => this.renderListaPacientes(data);
                    container.appendChild(folder);
                });
            }
            this.showScreen('screen-agente-lista');
        },
        renderListaPacientes(data) {
            const screen = document.getElementById('screen-agente-lista');
            screen.querySelector('.back-to-pastas')?.remove();
            screen.querySelector('h3.dynamic-title')?.remove();
            screen.querySelector('.search-input')?.remove();
            const container = screen.querySelector('#lista-container');
            const pacientesDoDia = this.state.pacientes.filter(p => p.data === data);
            const headerHTML = `<button class="back back-to-pastas">← Voltar às Pastas</button><h3 class="dynamic-title">Pacientes de ${data}</h3><input type="text" placeholder="Buscar por nome ou CPF..." class="search-input">`;
            container.insertAdjacentHTML('beforebegin', headerHTML);
            const searchInput = screen.querySelector('.search-input');
            const renderCards = (lista) => {
                container.innerHTML = '';
                if (lista.length === 0) {
                    container.innerHTML = '<p>Nenhum paciente encontrado.</p>';
                } else {
                    lista.forEach(p => container.appendChild(this.createPacienteCard(p, 'agente')));
                }
            };
            searchInput.addEventListener('input', (e) => {
                const termo = e.target.value.toLowerCase();
                const filtrados = pacientesDoDia.filter(p => p.nome.toLowerCase().includes(termo) || (p.cpf && p.cpf.includes(termo)));
                renderCards(filtrados);
            });
            if (pacientesDoDia.length === 0) {
                container.innerHTML = '<p>Nenhum paciente para esta data. Voltando para as pastas...</p>';
                setTimeout(() => this.renderPastas(), 2000);
                return;
            }
            renderCards(pacientesDoDia);
        },
        renderDashboardMedico(lista = this.state.pacientes) {
            const container = document.getElementById('medico-pacientes-list');
            container.innerHTML = '';
            if (lista.length === 0) {
                container.innerHTML = '<p>Nenhum paciente encontrado.</p>';
            }
            lista.forEach(p => container.appendChild(this.createPacienteCard(p, 'medico')));
        },
        toggleEditState(card, isEditing) {
            const form = card.querySelector('form');
            if (!form) return;
            const fields = form.querySelectorAll('input, select');
            const actionsView = card.querySelector('.actions-view');
            const actionsEdit = card.querySelector('.actions-edit');
            card.classList.toggle('editing', isEditing);
            fields.forEach(field => {
                if (field.name !== 'cargaTabagica') {
                    field.disabled = !isEditing;
                }
            });
            actionsView.classList.toggle('hidden', isEditing);
            actionsEdit.classList.toggle('hidden', !isEditing);
            if (!isEditing) {
                const pacienteId = parseInt(form.dataset.id, 10);
                const pacienteOriginal = this.state.pacientes.find(p => p.id === pacienteId);
                if (pacienteOriginal) {
                    form.reset();
                    Object.keys(pacienteOriginal).forEach(key => {
                        const field = form.querySelector(`[name="${key}"]`);
                        if (field) {
                            if (field.type === 'checkbox') {
                                field.checked = pacienteOriginal[key];
                            } else {
                                field.value = pacienteOriginal[key];
                            }
                        }
                    });
                    if (form.querySelector('[name="cpf"]')) {
                        form.querySelector('[name="cpf"]').value = this.formatCPF(pacienteOriginal.cpf || '');
                    }
                    ['comorbidade', 'bebe', 'fuma', 'alergia', 'atividade'].forEach(name => {
                        const checkbox = form.querySelector(`[name="${name}"]`);
                        let conditionalBox;
                        if (name === 'fuma') {
                            conditionalBox = form.querySelector('[name="cigarrosPorDia"]')?.parentElement;
                        } else {
                            conditionalBox = form.querySelector(`[name="${name}Tipo"]`)?.parentElement;
                        }
                        if (checkbox && conditionalBox) {
                            conditionalBox.classList.toggle('hidden', !checkbox.checked);
                        }
                    });
                }
            }
        },
        createPacienteCard(p, role) {
            const card = document.createElement('div');
            card.className = 'paciente-card';

            
            let photoHtmlHeader = '';
            if (p.foto) {
                photoHtmlHeader = `<img src="${p.foto}" alt="Foto de ${p.nome}" class="paciente-list-photo">`;
            } else {
                const inicial = p.nome ? p.nome.charAt(0).toUpperCase() : '?';
                photoHtmlHeader = `<div class="paciente-list-photo-placeholder">${inicial}</div>`;
            }
            
            let photoHtmlDetail = '';
            if (p.foto) {
                photoHtmlDetail = `<img src="${p.foto}" alt="Foto de ${p.nome}" class="paciente-detail-photo">`;
            }
          

            const createInput = (name, value, placeholder, type = 'text') => `<input name="${name}" type="${type}" value="${value || ''}" placeholder="${placeholder}" disabled>`;
            const createCheckbox = (name, checked, text) => `<div class="checkbox-group"><label class="checkbox-row"><input name="${name}" type="checkbox" ${checked ? 'checked' : ''} disabled> ${text}</label></div>`;
            let fumaContent = '';
            if (role === 'agente' || role === 'medico') {
                fumaContent = `${createCheckbox('fuma', p.fuma, 'Paciente fuma?')}<div class="conditional-box ${p.fuma ? '' : 'hidden'}">${createInput('cigarrosPorDia', p.cigarrosPorDia, 'Cigarros por dia', 'number')}${createInput('anosFumando', p.anosFumando, 'Anos fumando', 'number')}</div>`;
                if (role === 'medico' && p.fuma) {
                    fumaContent += `<div class="conditional-box">${createInput('cargaTabagica', `${(p.cargaTabagica || 0).toFixed(2)} maços-ano`, 'Carga Tabágica', 'text')}</div>`;
                }
            }
            
            
            card.innerHTML = `
            <div class="paciente-header">
                <div class="paciente-header-info"> ${photoHtmlHeader} <span>${p.nome}</span>
                </div>
                <span class="paciente-toggle">▶&#xFE0E;</span>
            </div>
            <div class="paciente-content">
                <form class="form form-edit-paciente" data-id="${p.id}" novalidate>
                    ${photoHtmlDetail} <h4>Detalhes do Paciente</h4>
                    ${createInput('nome', p.nome, 'Nome', 'text')}
                    ${createInput('idade', p.idade, 'Idade', 'number')}
                    ${createInput('cpf', p.cpf ? this.formatCPF(p.cpf) : '', 'CPF', 'text')}
                    ${createInput('peso', p.peso, 'Peso (kg)', 'number')}
                    ${createInput('endereco', p.endereco, 'Endereço')}
                    ${createCheckbox('comorbidade', p.comorbidade, 'Possui comorbidade?')}
                    <div class="conditional-box ${p.comorbidade ? '' : 'hidden'}">${createInput('comorbidadeTipo', p.comorbidadeTipo, 'Qual?')}</div>
                    <div class="checkbox-row-inline">
                        <label class="checkbox-row"><input name="avc" type="checkbox" ${p.avc ? 'checked' : ''} disabled> AVC</label>
                        <label class="checkbox-row"><input name="infarto" type="checkbox" ${p.infarto ? 'checked' : ''} disabled> Infarto</label>
                    </div>
                    ${createCheckbox('bebe', p.bebe, 'Paciente bebe?')}
                    <div class="conditional-box ${p.bebe ? '' : 'hidden'}">${createInput('bebeTipo', p.bebeTipo, 'Fermentada ou Destilada?')}</div>
                    ${fumaContent}
                    ${createCheckbox('alergia', p.alergia, 'Possui alergia?')}
                    <div class="conditional-box ${p.alergia ? '' : 'hidden'}">${createInput('alergiaTipo', p.alergiaTipo, 'Qual tipo de Alergia?')}</div>
                    ${createInput('medicamento', p.medicamento, 'Medicamento')}
                    ${createCheckbox('atividade', p.atividade, 'Pratica atividade física?')}
                    <div class="conditional-box ${p.atividade ? '' : 'hidden'}">${createInput('atividadeTipo', p.atividadeTipo, 'Qual exercício?')}<select name="atividadeFrequencia" disabled><option value="">Frequência</option><option value="1 vez na semana" ${p.atividadeFrequencia === '1 vez na semana' ? 'selected' : ''}>1 vez/semana</option><option value="1 a 3 vezes na semana" ${p.atividadeFrequencia === '1 a 3 vezes na semana' ? 'selected' : ''}>1-3 vezes/semana</option><option value="Mais de 3 vezes na semana" ${p.atividadeFrequencia === 'Mais de 3 vezes na semana' ? 'selected' : ''}>+3 vezes/semana</option></select></div>
                    <div class="form-actions actions-view">
                        <button type="button" data-action="edit-patient" class="primary edit-btn">Editar</button>
                        ${role === 'agente' ? `<button type="button" class="primary delete-btn" onclick="App.handleExcluirPaciente(${p.id})">Excluir</button>` : ''}
                    </div>
                    <div class="form-actions actions-edit hidden">
                        <button type="submit" class="primary">Salvar</button>
                        <button type="button" data-action="cancel-edit" class="primary delete-btn">Cancelar</button>
                    </div>
                </form>
            </div>`;
           

            ['comorbidade', 'bebe', 'fuma', 'alergia', 'atividade'].forEach(name => {
                card.querySelector(`[name="${name}"]`)?.addEventListener('change', e => {
                    const form = e.target.closest('form');
                    let conditionalBox;
                    if (name === 'fuma') {
                        conditionalBox = form.querySelector('[name="cigarrosPorDia"]')?.parentElement;
                    } else {
                        conditionalBox = form.querySelector(`[name="${name}Tipo"]`)?.parentElement;
                    }
                    conditionalBox?.classList.toggle('hidden', !e.target.checked);
                });
            });
            const cpfInput = card.querySelector('[name="cpf"]');
            if (cpfInput) cpfInput.addEventListener('input', e => {
                e.target.value = this.formatCPF(e.target.value);
            });
            return card;
        },
        setupAutocomplete() {
        
            const searchInput = document.getElementById('r-medic-search');
            if (searchInput) {
                const medBox = document.getElementById('med-box');
                let suggestionsBox = null;
                searchInput.addEventListener('input', () => {
                    const fullText = searchInput.value;
                    const lastCommaIndex = fullText.lastIndexOf(',');
                    const query = fullText.substring(lastCommaIndex + 1).trim().toLowerCase();
                    if (suggestionsBox) {
                        suggestionsBox.remove();
                        suggestionsBox = null;
                    }
                    if (query.length < 2) return;
                    const filteredMeds = this.state.data.medicamentos.filter(med => med.toLowerCase().includes(query));
                    if (!filteredMeds.length) return;
                    suggestionsBox = document.createElement('div');
                    suggestionsBox.className = 'suggestions-box';
                    filteredMeds.slice(0, 7).forEach(med => {
                        const item = document.createElement('div');
                        item.className = 'suggestion-item';
                        item.textContent = med;
                        item.onclick = () => {
                            const baseText = fullText.substring(0, lastCommaIndex + 1).trim();
                            searchInput.value = (baseText ? baseText + ' ' : '') + med + ', ';
                            if (suggestionsBox) suggestionsBox.remove();
                            searchInput.focus();
                        };
                        suggestionsBox.appendChild(item);
                    });
                    medBox.appendChild(suggestionsBox);
                });
                document.addEventListener('click', (e) => {
                    if (medBox && !medBox.contains(e.target) && suggestionsBox) {
                        suggestionsBox.remove();
                        suggestionsBox = null;
                    }
                });
            }

            const pacienteSearchInput = document.getElementById('paciente-medic-search');
            if (pacienteSearchInput) {
                const pacienteMedBox = document.getElementById('paciente-med-box');
                let pacienteSuggestionsBox = null;

                pacienteSearchInput.addEventListener('input', () => {
                    const query = pacienteSearchInput.value.trim().toLowerCase();
                    
                    if (pacienteSuggestionsBox) {
                        pacienteSuggestionsBox.remove();
                        pacienteSuggestionsBox = null;
                    }
                    if (query.length < 2) return;

                    const filteredMeds = this.state.data.medicamentos.filter(med => med.toLowerCase().includes(query));
                    if (!filteredMeds.length) return;

                    pacienteSuggestionsBox = document.createElement('div');
                    pacienteSuggestionsBox.className = 'suggestions-box';
                    filteredMeds.slice(0, 7).forEach(med => {
                        const item = document.createElement('div');
                        item.className = 'suggestion-item';
                        item.textContent = med;
                        item.onclick = () => {
                            pacienteSearchInput.value = med;
                            if (pacienteSuggestionsBox) pacienteSuggestionsBox.remove();
                            pacienteSearchInput.focus();
                        };
                        pacienteSuggestionsBox.appendChild(item);
                    });
                    pacienteMedBox.appendChild(pacienteSuggestionsBox);
                });

                document.addEventListener('click', (e) => {
                    if (pacienteMedBox && !pacienteMedBox.contains(e.target) && pacienteSuggestionsBox) {
                        pacienteSuggestionsBox.remove();
                        pacienteSuggestionsBox = null;
                    }
                });
            }
        },

        setupPacienteScreenEvents() {
            const form = document.getElementById('form-novo-alarme');
            form?.addEventListener('submit', e => {
                e.preventDefault();
                const medInput = document.getElementById('paciente-medic-search');
                const timeInput = document.getElementById('paciente-alarme-time');
                const med = medInput.value.trim();
                const time = timeInput.value;
                const alarmTime = new Date(time);

                if (!med || !time) {
                    return this.showNotification('Preencha o nome do remédio e a data/hora.', 'error');
                }
               
                if (isNaN(alarmTime.getTime())) {
                     return this.showNotification('Data ou hora inválida.', 'error');
                }
                if (alarmTime <= new Date()) {
                    return this.showNotification('Selecione uma data e hora no futuro.', 'error');
                }
                
                this.state.alarmes.push({
                    id: Date.now(),
                    med: med,
                    time: time
                });
                this.saveState();
                this.renderAlarmes();
                this.showNotification('Lembrete salvo!');
                form.reset();

                
                const timeInputElement = document.getElementById('paciente-alarme-time');
                if (timeInputElement) {
                    timeInputElement.setAttribute('type', 'text');
                    timeInputElement.style.color = 'var(--muted)';
                }

            });

            
            const timeInput = document.getElementById('paciente-alarme-time');
            if (timeInput) {
                
                const setInputType = (type) => {
                    timeInput.setAttribute('type', type);
                    if (type === 'text') {
                        timeInput.style.color = 'var(--muted)';
                    } else {
                        timeInput.style.color = '#333';
                    }
                };
                setInputType('text');

                timeInput.addEventListener('focus', () => {
                    setInputType('datetime-local');
                });

                timeInput.addEventListener('blur', () => {
                    if (!timeInput.value) {
                        setInputType('text');
                    }
                });
            }
        },

        renderAlarmes() {
            const container = document.getElementById('lista-alarmes-paciente');
            if (!container) return;

            const sortedAlarmes = [...this.state.alarmes].sort((a, b) => new Date(a.time) - new Date(b.time));

            if (sortedAlarmes.length === 0) {
                container.innerHTML = '<p>Nenhum lembrete ativo.</p>';
                return;
            }

            container.innerHTML = '';
            sortedAlarmes.forEach(alarme => {
                const item = document.createElement('div');
                item.className = 'alarme-item';
                
                const timeString = new Date(alarme.time).toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });

                item.innerHTML = `
                    <div>
                        <strong>${alarme.med}</strong>
                        <span>${timeString}</span>
                    </div>
                    <button class="primary delete-btn alarme-delete-btn" data-id="${alarme.id}">Excluir</button>
                `;
                container.appendChild(item);
            });

            
            container.querySelectorAll('.alarme-delete-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.handleDeleteAlarme(parseInt(btn.dataset.id, 10));
                });
            });
        },

        handleDeleteAlarme(id) {
            this.state.alarmes = this.state.alarmes.filter(a => a.id !== id);
            this.saveState();
            this.renderAlarmes();
            this.showNotification('Lembrete excluído.');
        },

        startAlarmChecker() {
            if ('Notification' in window && Notification.permission !== 'granted') {
                 Notification.requestPermission();
            }

            setInterval(() => {
                const now = new Date();
                const dueAlarmes = this.state.alarmes.filter(a => new Date(a.time) <= now);
                
                if (dueAlarmes.length > 0) {
                    dueAlarmes.forEach(alarme => {
                        this.triggerAlarm(alarme);
                    });
                    
                    const remainingAlarmes = this.state.alarmes.filter(a => new Date(a.time) > now);
                    this.state.alarmes = remainingAlarmes;
                    this.saveState();
                    
                    
                    if(document.getElementById('screen-paciente-lembretes').classList.contains('active')) {
                        this.renderAlarmes();
                    }
                }
            }, 5000);
        },

        triggerAlarm(alarm) {
            console.log('Disparando alarme:', alarm);

            const showNotification = () => {
                new Notification('Connect - Lembrete de Medicamento', {
                    body: `Hora de tomar seu ${alarm.med}!`,
                    icon: 'assets/favicon.png',
                    silent: false
                });
                
                const sound = document.getElementById('alarm-sound');
                if (sound) {
                    sound.play().catch(e => console.warn("Interação do usuário necessária para tocar o som.", e));
                }
            };

            if ('Notification' in window && Notification.permission === 'granted') {
                showNotification();
            } else if ('Notification' in window && Notification.permission !== 'denied') {
               
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        showNotification();
                    }
                });
            } else {
                
                alert(`LEMBRETE: Hora de tomar seu ${alarm.med}!`);
                const sound = document.getElementById('alarm-sound');
                if (sound) {
                    sound.play().catch(e => console.warn("Interação do usuário necessária para tocar o som.", e));
                }
            }
        }
    };
    App.init();
    window.App = App;
});