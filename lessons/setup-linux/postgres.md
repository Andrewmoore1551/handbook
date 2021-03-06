---
title: PostgreSQL
---

The database engine we will be using for our back-end work.

## Installation

Start a Terminal and run:

```shell
sudo apt install postgresql
```

```shell
sudo apt install pgcli
```

```shell
sudo -u postgres createuser --superuser $USER
```

## Configure pgcli with nice defaults

The following command will set some common user configuration options in your
pgcli. If you've used pgcli before and have custom configured it, this will
_overwrite_ your configuration changes.

```shell
sdg pgcliConfig
```

## Test if it is working:

From Terminal:

```shell
createdb MyTestDatabase
```

Then:

```shell
pgcli MyTestDatabase
```

If this command runs without requiring a password the configuration is complete

To close the `pgcli` tool you can type `exit` and press return.
