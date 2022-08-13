package com.ruoyi.stockManager.service;

import java.util.List;
import com.ruoyi.stockManager.domain.Deathmanage;

/**
 * 死亡管理Service接口
 * 
 * @author 孙少聪
 * @date 2022-04-22
 */
public interface IDeathmanageService 
{
    /**
     * 查询死亡管理
     * 
     * @param id 死亡管理主键
     * @return 死亡管理
     */
    public Deathmanage selectDeathmanageById(Long id);

    /**
     * 查询死亡管理列表
     * 
     * @param deathmanage 死亡管理
     * @return 死亡管理集合
     */
    public List<Deathmanage> selectDeathmanageList(Deathmanage deathmanage);

    /**
     * 新增死亡管理
     * 
     * @param deathmanage 死亡管理
     * @return 结果
     */
    public int insertDeathmanage(Deathmanage deathmanage);

    /**
     * 修改死亡管理
     * 
     * @param deathmanage 死亡管理
     * @return 结果
     */
    public int updateDeathmanage(Deathmanage deathmanage);

    /**
     * 批量删除死亡管理
     * 
     * @param ids 需要删除的死亡管理主键集合
     * @return 结果
     */
    public int deleteDeathmanageByIds(Long[] ids);

    /**
     * 删除死亡管理信息
     * 
     * @param id 死亡管理主键
     * @return 结果
     */
    public int deleteDeathmanageById(Long id);
}
