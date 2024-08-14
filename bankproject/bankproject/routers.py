# class DatabaseRouter:
#     """
#     A router to control all database operations on models in different databases.
#     """

#     def db_for_read(self, model, **hints):
#         """
#         Directs read operations to the appropriate database based on the model.
#         """
#         db_mapping = {
#             'BasicInformation': 'aa_user_management_db',
#             'BasicInfoAccount': 'aa_user_management_db',
#             'User': 'aa_user_management_db',
#             'Admin': 'aa_user_management_db',
#             'Transaction': 'aa_transaction_db',
#             'Notification': 'aa_notification_db',
#             'Reporting': 'aa_reporting_db'
#         }
#         return db_mapping.get(model.__name__, 'default')

#     def db_for_write(self, model, **hints):
#         """
#         Directs write operations to the appropriate database based on the model.
#         """
#         return self.db_for_read(model, **hints)

#     def allow_relation(self, obj1, obj2, **hints):
#         """
#         Allows relations if both objects are in the same database.
#         """
#         return obj1._state.db == obj2._state.db

#     def allow_migrate(self, db, app_label, model_name=None, **hints):
#         """
#         Ensures that migrations occur only on the appropriate database.
#         """
#         db_model_map = {
#             'aa_user_management_db': ['BasicInformation', 'BasicInfoAccount', 'User', 'Admin'],
#             'aa_transaction_db': ['Transaction'],
#             'aa_notification_db': ['Notification'],
#             'aa_reporting_db': ['Reporting']
#         }
#         allowed_models = db_model_map.get(db, [])
#         return model_name in allowed_models if app_label == 'bankapp' else None


class DatabaseRouter:
    """
    A router to control all database operations on models in different databases.
    """

    def db_for_read(self, model, **hints):
        """
        Directs read operations to the appropriate database based on the model.
        """
        db_mapping = {
            'BasicInformation': 'aa_user_management_db',
            'BasicInfoAccount': 'aa_user_management_db',
            'User': 'aa_user_management_db',
            'Admin': 'aa_user_management_db',
            'Transaction': 'aa_transaction_db',
            'Notification': 'aa_notification_db',
            'Reporting': 'aa_reporting_db',
            'UserLogin': 'aa_auth_db',  # New model
            'AdminLogin': 'aa_auth_db',  # New model
            'UserSignup': 'aa_auth_db',  # New model
            'AdminSignup': 'aa_auth_db',  # New model
        }
        return db_mapping.get(model.__name__, 'default')

    def db_for_write(self, model, **hints):
        """
        Directs write operations to the appropriate database based on the model.
        """
        return self.db_for_read(model, **hints)

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allows relations if both objects are in the same database.
        """
        return obj1._state.db == obj2._state.db

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Ensures that migrations occur only on the appropriate database.
        """
        db_model_map = {
            'aa_user_management_db': ['BasicInformation', 'BasicInfoAccount', 'User', 'Admin'],
            'aa_transaction_db': ['Transaction'],
            'aa_notification_db': ['Notification'],
            'aa_reporting_db': ['Reporting'],
            'aa_auth_db': ['UserLogin', 'AdminLogin', 'UserSignup', 'AdminSignup'],  # New models
        }
        allowed_models = db_model_map.get(db, [])
        return model_name in allowed_models if app_label == 'bankapp' else None
