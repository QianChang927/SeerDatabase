package com.robot.app.control
{
   import com.robot.app.buyItem.ItemInBagMsgManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.event.BonusEvent;
   import com.robot.core.info.BonusInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   import org.taomee.ds.HashSet;
   import org.taomee.manager.EventManager;
   
   public class BonusController
   {
      
      private static var _delayList:HashMap;
      
      private static var _ignoreList:HashMap;
      
      private static var _ignoreItemList:HashSet;
      
      private static var isPause:Boolean = false;
      
      private static var pauseBounsArr:Array = [];
       
      
      public function BonusController()
      {
         super();
      }
      
      public static function setup() : void
      {
         _delayList = new HashMap();
         _ignoreList = new HashMap();
         _ignoreItemList = new HashSet();
         EventManager.addEventListener(BonusEvent.BONUS_RECEIVE,onBonusReceive);
      }
      
      private static function onBonusReceive(param1:BonusEvent) : void
      {
         if(isPause)
         {
            pauseBounsArr.push(param1);
            return;
         }
         var _loc2_:BonusInfo = param1.info;
         if(hasIgnore(_loc2_.id))
         {
            showBonusInfo(_loc2_,getIgnore(_loc2_.id));
         }
         else if(hasDelay(_loc2_.id))
         {
            if(_delayList.containsKey(_loc2_.id))
            {
               (_delayList.getValue(_loc2_.id) as Array).push(_loc2_);
            }
            else
            {
               _delayList.add(_loc2_.id,[_loc2_]);
            }
         }
         else
         {
            showBonusInfo(_loc2_,getIgnore(IgnoreType.IGNORE_NONE_VALUE));
         }
      }
      
      public static function hasDelay(param1:int) : Boolean
      {
         return _delayList.containsKey(param1);
      }
      
      public static function addDelay(param1:int) : void
      {
         if(!_delayList.containsKey(param1))
         {
            _delayList.add(param1,[]);
         }
      }
      
      public static function removeDelay(param1:int) : void
      {
         _delayList.remove(param1);
      }
      
      public static function hasIgnore(param1:int) : Boolean
      {
         return _ignoreList.containsKey(param1);
      }
      
      public static function getIgnore(param1:int) : Object
      {
         if(!hasIgnore(param1))
         {
            return null;
         }
         var _loc2_:int = int(_ignoreList.getValue(param1));
         return {
            "ignorePet":IgnoreType.isIgnored(_loc2_,IgnoreType.IGNORE_PET),
            "ignoreItem":IgnoreType.isIgnored(_loc2_,IgnoreType.IGNORE_ITEM),
            "ignoreMark":IgnoreType.isIgnored(_loc2_,IgnoreType.IGNORE_MARK)
         };
      }
      
      public static function addIgnore(param1:int, param2:Boolean = true, param3:Boolean = true, param4:Boolean = true) : void
      {
         if(hasIgnore(param1))
         {
            return;
         }
         _ignoreList.add(param1,IgnoreType.makeValue(param2,param3,param3));
      }
      
      public static function removeIgnore(param1:int) : void
      {
         if(!hasIgnore(param1))
         {
            return;
         }
         _ignoreList.remove(param1);
      }
      
      public static function showDelayBonus(param1:int) : void
      {
         var _loc2_:BonusInfo = null;
         if(!hasDelay(param1))
         {
            return;
         }
         for each(_loc2_ in _delayList.getValue(param1))
         {
            showBonusInfo(_loc2_);
         }
         removeDelay(param1);
      }
      
      public static function getDelayBonusInfo(param1:int) : BonusInfo
      {
         if(!hasDelay(param1))
         {
            return null;
         }
         if(_delayList.getValue(param1).length > 0)
         {
            return _delayList.getValue(param1)[0] as BonusInfo;
         }
         return null;
      }
      
      public static function hasIgnoreItem(param1:int, param2:int) : Boolean
      {
         return _ignoreItemList.contains(param1 + "_" + param2);
      }
      
      public static function ignoreItem(param1:int, param2:int) : void
      {
         if(hasIgnoreItem(param1,param2))
         {
            return;
         }
         _ignoreItemList.add(param1 + "_" + param2);
      }
      
      public static function removeIgnoreItem(param1:int, param2:int) : void
      {
         _ignoreItemList.remove(param1 + "_" + param2);
      }
      
      public static function showBonusInfo(param1:BonusInfo, param2:Object = null) : void
      {
         var _loc3_:Object = null;
         var _loc4_:Object = null;
         var _loc5_:Object = null;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         if(null == param1)
         {
            return;
         }
         if(null == param2)
         {
            param2 = IgnoreType.getObject(IgnoreType.IGNORE_NONE_VALUE);
         }
         for each(_loc3_ in param1.itemList)
         {
            _loc5_ = ItemXMLInfo.getItemObj(_loc3_.id);
            if(_loc3_ != null)
            {
               if((_loc6_ = int(_loc5_["SkinId"])) > 0)
               {
                  SocketConnection.send(47315,_loc3_.id);
                  continue;
               }
            }
            if(ItemXMLInfo.getIsMidleItem(_loc3_.id))
            {
               if((_loc7_ = int(ItemXMLInfo.getExchangeId(_loc3_.id))) > 0)
               {
                  KTool.doExchange(_loc7_);
               }
               if(!hasIgnoreItem(param1.id,_loc3_.id) && !param2.ignoreItem)
               {
                  if(ItemInBagMsgManager.hasMsg(_loc3_.id))
                  {
                     ItemInBagMsgManager.showMsg(_loc3_.id,_loc3_.count);
                  }
               }
            }
            else if(_loc3_.count != 0)
            {
               if(ItemXMLInfo.getCatID(_loc3_.id) == 14 && _loc3_.id != 1400152 && _loc3_.id != 1400153)
               {
                  if(!hasIgnoreItem(param1.id,_loc3_.id) && !param2.ignoreItem)
                  {
                     if(_loc3_.id == 1400352 || ItemInBagAlert.SPECIAL_ALERT_ITEM_IDS.indexOf(_loc3_.id) != -1)
                     {
                        ItemInBagAlert.show(_loc3_.id,toR(_loc3_.count) + "个" + itemName(_loc3_.id) + "已经放入了你的储存箱！");
                     }
                     else if(ItemInBagMsgManager.hasMsg(_loc3_.id))
                     {
                        ItemInBagMsgManager.showMsg(_loc3_.id,_loc3_.count);
                     }
                  }
               }
               else if(_loc3_.id < 10)
               {
                  if(!hasIgnoreItem(param1.id,_loc3_.id) && !param2.ignoreItem)
                  {
                     if(_loc3_.id == 1)
                     {
                        ItemInBagAlert.show(_loc3_.id,toR(_loc3_.count) + "个" + itemName(_loc3_.id) + "已经放入了你的储存箱！");
                     }
                     else if(_loc3_.id == 3)
                     {
                        ItemInBagAlert.show(_loc3_.id,toR(_loc3_.count) + "点" + itemName(_loc3_.id) + "已经放入你的经验分配器！");
                     }
                     else if(_loc3_.id == 9)
                     {
                        ItemInBagAlert.show(_loc3_.id,toR(_loc3_.count) + "点" + itemName(_loc3_.id) + "已经放入你的学习力分配器！");
                     }
                     else
                     {
                        Alarm.show("恭喜你得到了" + toR(_loc3_.count) + "个" + itemName(_loc3_.id) + "！");
                     }
                  }
                  if(_loc3_.id == 1)
                  {
                     MainManager.actorInfo.coins += _loc3_.count;
                  }
               }
               else if(!hasIgnoreItem(param1.id,_loc3_.id) && !param2.ignoreItem)
               {
                  ItemInBagAlert.show(_loc3_.id,toR(_loc3_.count) + "个" + itemName(_loc3_.id) + "已经放入了你的储存箱！");
               }
            }
         }
         if(param1.petID != 0)
         {
            GetPetController.getPet(param1.petID,param1.captime,null,!param2.ignorePet);
         }
         for each(_loc4_ in param1.markList)
         {
            if(!hasIgnoreItem(param1.id,_loc4_.id) && !param2.ignoreMark)
            {
               ItemInBagAlert.show(_loc4_.id,toR(_loc4_.count) + "个" + markName(_loc4_.id) + "已经放入了你的储存箱！");
            }
         }
         getDefinitionByName("com.robot.app2.systems.PetSkinController").instance.onPetSkinChangeByBonus(param1.skinList);
      }
      
      private static function toR(param1:String) : String
      {
         return TextFormatUtil.getRedTxt(param1);
      }
      
      private static function itemName(param1:int) : String
      {
         return toR(ItemXMLInfo.getName(param1));
      }
      
      private static function markName(param1:int) : String
      {
         return toR(CountermarkXMLInfo.getDes(param1));
      }
      
      public static function getDelayList() : HashMap
      {
         return _delayList;
      }
      
      public static function pauseAllBonus() : void
      {
         isPause = true;
         pauseBounsArr = [];
      }
      
      public static function continueAllBonus(param1:Boolean = false) : void
      {
         var _loc2_:* = undefined;
         isPause = false;
         if(param1)
         {
            for each(_loc2_ in pauseBounsArr)
            {
               onBonusReceive(_loc2_);
            }
         }
      }
   }
}

class IgnoreType
{
   
   public static const IGNORE_ALL_VALUE:int = 4294967295;
   
   public static const IGNORE_NONE_VALUE:int = 0;
   
   public static const IGNORE_PET:int = 1;
   
   public static const IGNORE_ITEM:int = 2;
   
   public static const IGNORE_MARK:int = 4;
    
   
   public function IgnoreType()
   {
      super();
   }
   
   public static function isIgnored(param1:int, param2:int) : Boolean
   {
      return (param1 & param2) == param2;
   }
   
   public static function getValue(... rest) : int
   {
      var _loc2_:int = 0;
      var _loc3_:int = 0;
      while(_loc3_ < rest.length)
      {
         _loc2_ += int(rest[_loc3_]);
         _loc3_++;
      }
      return _loc2_;
   }
   
   public static function makeValue(param1:Boolean = true, param2:Boolean = true, param3:Boolean = true) : int
   {
      return IgnoreType.getValue(IgnoreType.IGNORE_ITEM * int(param1) + IgnoreType.IGNORE_PET * int(param2) + IgnoreType.IGNORE_MARK * int(param3));
   }
   
   public static function getObject(param1:int) : Object
   {
      return {
         "ignorePet":IgnoreType.isIgnored(param1,IgnoreType.IGNORE_PET),
         "ignoreItem":IgnoreType.isIgnored(param1,IgnoreType.IGNORE_ITEM),
         "ignoreMark":IgnoreType.isIgnored(param1,IgnoreType.IGNORE_MARK)
      };
   }
}
