/**
 * Created by Source on 2016-06-06.
 */
accountsUIBootstrap3.setLanguage('ko');
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'name',
        fieldLabel: '이름',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
            if (!value) {
                errorFunction("이름을 입력해주세요");
                return false;
            } else {
                return true;
            }
        }
    },{
        fieldName: 'gender',
        fieldLabel: '성별 선택',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: '남자',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
        }, {
            id: 2,
            label: '여자',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'country',
        fieldLabel: '국가 선택',
        inputType: 'select',
        showFieldLabel: true,
        empty: '국가를 선택해주세요',
        data: [{
            id: 1,
            label: 'United States',
            value: 'us'
        }, {
            id: 2,
            label: '대한민국',
            value: 'kr',
        }],
        visible: true
    },{
        fieldName: 'terms',
        fieldLabel: '정보제공을 동의합니다.',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('회원가입을 위해서는 정보제공동의를 하셔야합니다.');
                return false;
            }
        }
    }]
});