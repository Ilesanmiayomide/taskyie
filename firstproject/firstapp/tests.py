from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse


class AuthViewTests(TestCase):
    def test_create_account_creates_user_and_logs_in(self):
        response = self.client.post(
            reverse('createAccount'),
            {'email': 'alice@example.com', 'password': 'StrongPass123'},
            follow=True,
        )

        self.assertEqual(response.status_code, 200)
        user = get_user_model().objects.get(username='alice@example.com')
        self.assertEqual(user.email, 'alice@example.com')
        self.assertTrue(user.check_password('StrongPass123'))
        self.assertTrue(response.wsgi_request.user.is_authenticated)
        self.assertTemplateUsed(response, 'change.html')

    def test_login_view_authenticates_existing_user(self):
        get_user_model().objects.create_user(
            username='bob@example.com',
            email='bob@example.com',
            password='StrongPass123',
        )

        response = self.client.post(
            reverse('login_view'),
            {'email': 'bob@example.com', 'password': 'StrongPass123'},
            follow=True,
        )

        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.wsgi_request.user.is_authenticated)
        self.assertRedirects(response, reverse('change_view'))
