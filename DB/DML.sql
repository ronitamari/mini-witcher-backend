-- insert into user_type --
insert into user_type (type, display_name) select 's', 'soldier';
insert into user_type (type, display_name) select 'm', 'reserve';
insert into user_type (type, display_name) select 'r', 'solider';
insert into user_type (type, display_name) select 'h', 'hamal';
insert into user_type (type, display_name) select 'c', 'civilian';
insert into user_type (type, display_name) select 'o', 'out source';
insert into user_type (type, display_name) select 'p', 'project';
insert into user_type (type, display_name) select 'x', 'strong user';
insert into user_type (type, display_name) select 'w', 'worker';
insert into user_type (type, display_name) select 'other', 'other';

-- insert into AD_user --
insert into AD_user (
    type_id, enabled, display_name, last_logon_time, created_date, smart_card_logon_required, password_not_required
)
select
	((random()*10)::int % 10 + 1)::int,
	--('yes' : 'no')::boolean,
	((random()*10)::int % 2)::boolean,
	--left((i::text),20),
	left(md5(random()::text),20),
	--TO_DATE('2000-01-01', 'YYYY-MM-DD') + (DBMS_random.value * 365 * 20)
	generate_series(timestamp '2004-03-07', '2004-08-16', '1 day')::date,
	generate_series(timestamp '2004-03-07', '2004-08-16', '1 day')::date,
	((random()*10)::int % 2)::boolean,
	((random()*10)::int % 2)::boolean;

-- insert into witcher_users --
insert into witcher_users (
    display_name, username, password
)
select
	left(md5(random()::text),20),
	left(md5(random()::text),20),
	left(md5(random()::text),20)
from generate_series(1, 11);

select * from witcher_users;