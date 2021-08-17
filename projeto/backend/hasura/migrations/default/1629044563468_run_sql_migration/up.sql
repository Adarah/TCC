CREATE OR REPLACE VIEW "public"."flattened_lab_user_role" AS 
 WITH RECURSIVE sub_tree AS (
         SELECT role.id AS role_id,
            lab_user_role.user_id,
            lab_user_role.lab_id
           FROM lab_user_role,
            role
          WHERE (role.id = lab_user_role.role_id)
        UNION ALL
         SELECT r.id AS role_id,
            st.user_id,
            st.lab_id
           FROM role r,
            sub_tree st
          WHERE (r.parent_role_id = st.role_id)
        )
 SELECT sub_tree.role_id,
    sub_tree.user_id,
    sub_tree.lab_id
   FROM sub_tree;
