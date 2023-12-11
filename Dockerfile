# Use the official Laravel image as the build stage
FROM laravel:8.2 AS build

WORKDIR /var/www/html

# Copy only the necessary files for installing dependencies
COPY composer.json composer.json
COPY composer.lock composer.lock

# Install Composer dependencies
RUN composer install --no-interaction --optimize-autoloader --no-dev

# Copy the rest of the application files
COPY . .

# # Set permissions
# RUN chown -R www-data:www-data /var/www/html/storage

# Second stage for a lightweight production image
FROM php:8.2.0

WORKDIR /var/www/html

# Copy only necessary files from the build stage
COPY --from=build /var/www/html .

# Expose port 9000 and start PHP-FPM
EXPOSE 9000
CMD ["php-fpm"]
