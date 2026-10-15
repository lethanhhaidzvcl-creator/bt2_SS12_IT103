
let subscriptions = [
  { subscriptionId: 'SUB_001', customerName: 'Nguyen Van An', planTier: 'PERSONAL', deviceLimit: 1 },
  { subscriptionId: 'SUB_002', customerName: 'Tran Thi Mai', planTier: 'FAMILY', deviceLimit: 5 },
  { subscriptionId: 'SUB_003', customerName: 'Le Van Nam', planTier: 'PERSONAL', deviceLimit: 1 }
];

let subscriptionCounter = 4;

function addSubscription() {
  let customerName = prompt('Nhập tên khách hàng:');

  if (customerName === null || customerName.trim() === '') {
    console.log('Tên khách hàng không hợp lệ!');
    return;
  }

  let planTier = prompt('Chọn gói: PERSONAL hoặc FAMILY');

  if (planTier === null) {
    return;
  }

  planTier = planTier.trim().toUpperCase();

  if (planTier !== 'PERSONAL' && planTier !== 'FAMILY') {
    console.log('Gói thuê bao không hợp lệ!');
    return;
  }

  let deviceLimit = planTier === 'PERSONAL' ? 1 : 5;
  let subscriptionId = 'SUB_' + String(subscriptionCounter).padStart(3, '0');

  subscriptions.push({
    subscriptionId: subscriptionId,
    customerName: customerName.trim(),
    planTier: planTier,
    deviceLimit: deviceLimit
  });

  subscriptionCounter++;
  console.log('Thêm thuê bao thành công!');
}

function listSubscriptions() {
  if (subscriptions.length === 0) {
    console.log('Danh sách thuê bao trống!');
    return;
  }

  console.table(subscriptions);
}

function updateSubscription() {
  let subscriptionId = prompt('Nhập mã thuê bao cần cập nhật:');

  if (subscriptionId === null) {
    return;
  }

  let found = false;

  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].subscriptionId === subscriptionId.trim()) {
      let planTier = prompt('Nhập gói mới: PERSONAL hoặc FAMILY');

      if (planTier === null) {
        return;
      }

      planTier = planTier.trim().toUpperCase();

      if (planTier !== 'PERSONAL' && planTier !== 'FAMILY') {
        console.log('Gói thuê bao không hợp lệ!');
        return;
      }

      subscriptions[i].planTier = planTier;
      subscriptions[i].deviceLimit = planTier === 'PERSONAL' ? 1 : 5;

      console.log('Cập nhật thuê bao thành công!');
      found = true;
      break;
    }
  }

  if (!found) {
    console.log('Không tìm thấy mã thuê bao!');
  }
}

function deleteSubscription() {
  let subscriptionId = prompt('Nhập mã thuê bao cần hủy:');

  if (subscriptionId === null) {
    return;
  }

  let found = false;

  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].subscriptionId === subscriptionId.trim()) {
      subscriptions.splice(i, 1);
      console.log('Hủy thuê bao thành công!');
      found = true;
      break;
    }
  }

  if (!found) {
    console.log('Không tìm thấy mã thuê bao!');
  }
}

let menuChoice;

do {
  menuChoice = prompt(
    '===== QUẢN LÝ THUÊ BAO RIKKEISTREAM =====\n' +
    '1. Thêm thuê bao mới\n' +
    '2. Xem danh sách thuê bao\n' +
    '3. Cập nhật gói cước\n' +
    '4. Hủy thuê bao\n' +
    '5. Thoát chương trình\n' +
    'Nhập lựa chọn của bạn:'
  );

  if (menuChoice === null) {
    break;
  }

  switch (menuChoice.trim()) {
    case '1':
      addSubscription();
      break;

    case '2':
      listSubscriptions();
      break;

    case '3':
      updateSubscription();
      break;

    case '4':
      deleteSubscription();
      break;

    case '5':
      console.log('Đã thoát chương trình!');
      break;

    default:
      console.log('Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 5.');
  }
} while (menuChoice.trim() !== '5');
