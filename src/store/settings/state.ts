/**
 * settings state
 */
export class SettingsState {

    public lists?: any[];
    public rowInfo?: any;
    /**
     * steps information
     */
    public steps?: any;

    /**
     * steps information
     */
    public botInformation = {
        botName: "",
        aboutBot: "",
        helloBot: ""
    };

    /**
     * user card information
     */
    public cardInformation = {
        cardNumber: '',
    }

    public okpo?: string = '';
    /**
     * user score information
     */
    public scoreInformation = {
        accountNumber: ''
    }
    /**
     * user score information
     */
    public typePayment?: string = 'card';
    /**
     * user score information
     */
    public merchantId?: number;
    /**
     * status indicator information
     */
    public statusIndicator?: any[];
    /**
     * all categories information
     */
    public categories?: any[];

    public selectedCategory?: string;

    public finishStep?: boolean = false;

    public paymentInformation = {
        cardNumber: '',
        accountNumber: "",
        okpo: '',
        mfo: '',
        typePayment: 'score',
    };

    public merchantProducts?: any;
    public merchantInfo?: any;
    public allProducts?: any[];
    public step?: number;
    public statusRequest?: number;

    public isAccountPage?: boolean = false;
    public isLoading?: boolean = false;
    public updatedInformatio?: boolean = false;
}
