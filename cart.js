$(function(){
	countItem();
	//1.ȫѡ��ȡ��ȫѡ
	var isTrue = false;
	$("#checkall").click(function(){
		isTrue = !isTrue;
		if(isTrue){
			//ѡ�в���checked = "true"
			//��ȡ������Ʒ��ѡ���,����ѡ������
			//prop()������attr(),ΪԪ����������
			$("[name=check]").prop("checked","true");
		}else{
			//ȡ����ѡ
			$("[name=check]").removeAttr("checked");
		}
	});

	//2.ͨ����Ʒѡ���ѡ����ȫѡ��ť
	$("[name=check]").click(function(){
		//input:checked��ʾƥ�䱻ѡ�е�Ԫ��
		if($("input[name=check]").not("input:checked").size()<=0){//��ȡδ��ѡ�е�Ԫ�ظ������ж��Ƿ�С�ڵ���0
			//ȫѡ��ťҲӦ����ѡ��״̬
			$("#checkall").prop("checked",true);
			//���ȫѡ��ť��״̬
			isTrue = true;
		}else{
			//����δ��ѡ��Ԫ��
			$("#checkall").prop("checked",false);
			isTrue = false;
//			$("#checkall").removeAttr("checked");
		}

	});

	//3.��������
	$(".increment").click(function(){
		//���+,���������
		var value = $(this).prev().val();
		//��ֵ����֮�����¸����������ʾ
		$(this).prev().val(++value);
		//�۸�����
		//ͨ���㼶�ṹ��ȡ��ǰ��Ʒ�ļ۸�
		var priceStr = $(this).parent().prev().text();//����
		//��ȡ�ַ�����ȡ�۸�
		var price = Number(priceStr.substring(1,priceStr.length));
		//��ȡС��
        $(this).parent().next().html("<strong>&yen;"+value*price+"</strong>");
		countItem();

	});

	$(".decrement").click(function(){
		if($(this).next().val()>1){
			//��������1��--����
			var value = $(this).next().val();
			$(this).next().val(--value);
			//�۸�����
			//ͨ���㼶�ṹ��ȡ��ǰ��Ʒ�ļ۸�
			var priceStr = $(this).parent().prev().text();//����
			//��ȡ�ַ�����ȡ�۸�
			var price = Number(priceStr.substring(1,priceStr.length));
			//��ȡС��
			 $(this).parent().next().html("<strong>&yen;"+value*price+"</strong>");
		}else{
			//����ǰ��Ʒ�Ƴ�
			$(this).parent().parent().remove();
		}
		countItem();
	});

	//4.�Ƴ���ť����
	$(".removeItem").click(function(){
		//�Ƴ���ǰ����Ʒ
		$(this).parent().parent().remove();
	});

	//5.��̬�޸���Ʒ������ʵ�ּ۸�����
	//�����ʧȥ����ʱ���޸���Ʒ�۸�
	$("[name=count]").blur(function(){
		var value = $(this).val();
		if(isNaN(value) != "NaN"){
			//�������Ƿ��ַ������»�ȡ����
			//������ʾ������ʾ
		}else{
			//�����۸�
			//ͨ���㼶�ṹ��ȡ��ǰ��Ʒ�ļ۸�
			var priceStr = $(this).parent().prev().text();//����
			//��ȡ�ַ�����ȡ�۸�
			var price = Number(priceStr.substring(1,priceStr.length));
			//��ȡС��
			$(this).parent().next().html("<strong>&yen;"+value*price+"</strong>");
		}
		//�������������ܼ۸�
		countItem();
	});
	//6.���������ܼ۸�䶯
	function countItem(){
		//������Ʒ������ֵ���ܼ�
		//��ȡ������Ʒ������
		var sum = 0;
		$("[name=count]").each(function(){
			//�������е�name=count���������ȡֵ���
			sum += Number($(this).val());
		});
		//��ȡ������Ʒ���ܼ۸� 
		var priceSum = 0;
		$(".t-sum strong").each(function(){
			var priceStr = $(this).text();
			var price = Number(priceStr.substring(1,priceStr.length));
			priceSum += price;
		});

		//��ҳ��ײ���ʾ�����ͼ۸�
		$(".submit-count span").html(sum);
		$(".submit-price span").html("&yen;"+priceSum);
	}
	

});


















