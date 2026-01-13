---
title: Research
summary: My research papers and projects
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true
      
      
sections:
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
      
        My research examines the economic impacts of evolving agricultural conservation policies across field, regional, and global scales. In my job market paper, I estimate the trade-offs between land retirement and working lands conservation, showing that the latter can achieve similar employment outcomes more cost-effectively. My second dissertation chapter investigates the international leakage effects of U.S. land retirement policies, while the third explores how crop prices influence climate change mitigation in the American Corn Belt using an integrated model.  Moving forward, I will further explore how environmental policies intersect with agricultural conservation, GHG emissions, trade, rural development, and food security across these scales in the context of climate change.

        
    design:
      columns: '1'




  - block: collection
    id: research
    content:
      title: Recent Publications
      filters:
        exclude_featured: false
        folders:
          - research  # 确保此处的文件夹名称与实际存储研究内容的文件夹名称一致
      text: ""
    design:
      view: citation
      
  - block: collection
    id: working_papers
    content:
      title: Working Papers
      filters:
        exclude_featured: false
        folders:
          - working_papers  # Make sure this folder matches the actual folder name where the working papers are stored
      text: ""
    design:
      view: citation
      
  - block: collection
    id: featured-posters
    content:
      title: Featured Posters
      filters:
        featured_only: true
        folders:
          - posters # 确保此处的文件夹名称与实际存储海报内容的文件夹名称一致
    design:
      columns: 2
      view: article-grid
      

  - block: markdown
    content:
      title: '🏆 Funded Grants'
      subtitle: ''
      text: |-
        <h4 style="font-size: 1.3em;">IATRC Commissioned Paper: $35,000, Co-PI:</h4>
        
        <ul>
          
          <li>Title: Global Economic Effects of Trade Restrictions on Japanese Seafood following Nuclear Wastewater Discharge</li>
          <li>Will Present at 2024 IATRC Annual Meeting (Clearwater, FL)</li>
          
        </ul>

        
    design:
      columns: '1'
      
---