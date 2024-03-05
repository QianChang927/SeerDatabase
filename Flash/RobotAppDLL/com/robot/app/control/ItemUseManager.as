package com.robot.app.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.ac.StudyUpManager;
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.app.automaticFight.ShowFightHpManager;
   import com.robot.app.panel.NatureChoosePanel;
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.app.petbag.petPropsBag.petPropClass.PetProTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.BoxordinaryXmlInfo;
   import com.robot.core.config.xml.ItemUseXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.itemUse.ItemUseInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.pet.PetIdTransform;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.ItemType;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class ItemUseManager
   {
      
      public static var EVENT_USE_ITEM_SUCCESSFUL:String = "event_use_item_successful";
      
      public static var EVENT_USE_ITEM_FAILURE:String = "EVENT_USE_ITEM_FAILURE";
      
      private static var _instance:com.robot.app.control.ItemUseManager = null;
       
      
      public function ItemUseManager()
      {
         super();
         if(com.robot.app.control.ItemUseManager._instance)
         {
            DebugTrace("ItemUseManager 不允许存在多个实例");
         }
         this.initEvents();
      }
      
      public static function getInstance() : com.robot.app.control.ItemUseManager
      {
         if(!com.robot.app.control.ItemUseManager._instance)
         {
            com.robot.app.control.ItemUseManager._instance = new com.robot.app.control.ItemUseManager();
         }
         return com.robot.app.control.ItemUseManager._instance;
      }
      
      public function $$usePetItem(param1:PetPropInfo) : void
      {
         var _loc2_:Object = null;
         var _loc3_:Array = null;
         var _loc4_:Array = null;
         if(PetProTool.checkLimitPetClass(param1))
         {
            _loc2_ = ItemXMLInfo.getItemInfo(param1.itemId);
            _loc3_ = [];
            _loc4_ = [300882];
            if(Boolean(_loc2_["IncreMonLvTo"]) && _loc2_["IncreMonLvTo"] > 0)
            {
               SocketConnection.send(CommandID.UP_GRADE_MEDICINE,param1.itemId,param1.petInfo.catchTime);
            }
            else if(_loc3_.indexOf(param1.itemId) >= 0)
            {
               SocketConnection.send(CommandID.EAT_SPECIAL_MEDICINE,param1.petInfo.catchTime,param1.itemId);
            }
            else if(_loc4_.indexOf(param1.itemId) >= 0)
            {
               SocketConnection.send(43603,param1.petInfo.catchTime,param1.itemId);
            }
            else
            {
               SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
            }
         }
      }
      
      private function initEvents() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < CommandID.USEITEM_CMDS.length)
         {
            SocketConnection.addCmdListener(CommandID.USEITEM_CMDS[_loc1_],this.onUseItemSuccessful);
            _loc1_++;
         }
         SocketConnection.addCmdListener(CommandID.PET_RESET_NATURE,this.onUseItemSuccessful);
         SocketConnection.addCmdListener(CommandID.USE_COUNTERMARK,this.onUseItemSuccessful);
         SocketConnection.addCmdListener(CommandID.SET_PET_CONST_FORM,this.onUseItemSuccessful);
         SocketConnection.addCmdListener(CommandID.USE_PET_ITEM_INCREASE_STUDY,this.onUseItemSuccessful);
         SocketConnection.addCmdListener(CommandID.USE_ENERGY_XISHOU,this.onUseItemSuccessful);
      }
      
      private function onUseItemSuccessful(param1:SocketEvent) : void
      {
         var _loc2_:RobotEvent = new RobotEvent(com.robot.app.control.ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL,false,true,param1.data);
         EventManager.dispatchEvent(_loc2_);
      }
      
      public function useItem(param1:PetInfo, param2:int) : void
      {
         var itemName:String;
         var str:String;
         var propInfo:PetPropInfo = null;
         var petInfo:PetInfo = param1;
         var itemID:int = param2;
         if(!petInfo)
         {
            Alarm2.show("使用物品前，请先选择一个精灵");
            return;
         }
         if(itemID <= 0)
         {
            return;
         }
         itemName = String(ItemXMLInfo.getName(itemID));
         propInfo = new PetPropInfo();
         propInfo.petInfo = petInfo;
         propInfo.itemId = itemID;
         propInfo.itemName = itemName;
         str = "你确定要对你的<font color=\'#ff0000\'>" + PetXMLInfo.getName(petInfo.id) + "</font>使用" + TextFormatUtil.getRedTxt(itemName) + "吗？";
         Alert.show(str,function():void
         {
            usePetItem(propInfo,itemID);
         });
      }
      
      public function usePetItem(param1:PetPropInfo, param2:int) : void
      {
         var obj:* = undefined;
         var item:ItemUseInfo = null;
         var fun:Function = null;
         var catID:int = 0;
         var propInfo:PetPropInfo = param1;
         var itemID:int = param2;
         try
         {
            obj = getDefinitionByName("com.robot.app.petbag.petPropsBag.petPropClass.PetPropClass_" + itemID);
            if(obj)
            {
               new obj(propInfo);
            }
         }
         catch(e:*)
         {
            item = ItemUseXMLInfo.getInfoById(propInfo.itemId);
            if(Boolean(item) && Boolean(this["usePetItemByType" + item.type]))
            {
               if(PetProTool.checkLimitPetClass(propInfo))
               {
                  fun = this["usePetItemByType" + item.type];
                  fun.call(this,propInfo);
               }
            }
            else
            {
               catID = int(ItemXMLInfo.getCatID(itemID));
               switch(catID)
               {
                  case ItemType.GIFT:
                     useBox(propInfo,itemID);
                     break;
                  case ItemType.PET_PROPERTY:
                     $$usePetItem(propInfo);
               }
            }
         }
      }
      
      private function useBox(param1:PetPropInfo, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var paropInfo:PetPropInfo = param1;
         var itemID:int = param2;
         deferred = new Deferred();
         var obj:Object = BoxordinaryXmlInfo.getboxInfoByItemid(itemID);
         SocketConnection.sendWithCallback(42394,function():void
         {
            Alarm2.show("道具使用成功");
            deferred.resolve(itemID);
         },obj.id,itemID,1);
         return deferred.promise;
      }
      
      private function usePetItemByType0(param1:PetPropInfo) : void
      {
         SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
      }
      
      private function usePetItemByType1(param1:PetPropInfo) : void
      {
         if(param1.petInfo.hp == param1.petInfo.maxHp)
         {
            Alarm2.show("你的<font color=\'#ff4545\'>" + param1.petInfo.name + "</font>不需要再使用此物品啦！");
         }
         else
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
         }
      }
      
      private function usePetItemByType2(param1:PetPropInfo) : void
      {
         SocketConnection.send(CommandID.EAT_SPECIAL_MEDICINE,param1.petInfo.catchTime,param1.itemId);
      }
      
      private function usePetItemByType3(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,[info.petInfo.catchTime,info.itemId],function():void
         {
            PetManager.upDateBagPetInfo(info.petInfo.catchTime,function():void
            {
               var _loc1_:PetInfo = PetManager.getPetInfo(info.petInfo.catchTime);
               Alarm2.show("精灵的性格变为了" + NatureXMLInfo.getName(_loc1_.nature));
            });
         });
      }
      
      private function usePetItemByType4(param1:PetPropInfo) : void
      {
         var self:* = undefined;
         var turnOffSkillMark:Function = null;
         var turnOffCommonMark:Function = null;
         var useItem:Function = null;
         var info:PetPropInfo = param1;
         self = this;
         var turnOffAbilityMark:Function = function():void
         {
            if(info.petInfo.abilityMark)
            {
               SocketConnection.sendByQueue(CommandID.USE_COUNTERMARK,[info.petInfo.catchTime,0,0,0],turnOffSkillMark);
            }
            else
            {
               turnOffSkillMark();
            }
         };
         turnOffSkillMark = function():void
         {
            if(info.petInfo.skillMark)
            {
               SocketConnection.sendByQueue(CommandID.USE_COUNTERMARK,[info.petInfo.catchTime,1,0,0],turnOffCommonMark);
            }
            else
            {
               turnOffCommonMark();
            }
         };
         turnOffCommonMark = function():void
         {
            if(info.petInfo.commonMark)
            {
               SocketConnection.sendByQueue(CommandID.USE_COUNTERMARK,[info.petInfo.catchTime,2,0,0],useItem);
            }
            else
            {
               useItem();
            }
         };
         useItem = function():void
         {
            SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,[info.petInfo.catchTime,info.itemId],function():void
            {
               self.dispatchUseItemSuccess(info);
            });
         };
         turnOffAbilityMark();
      }
      
      private function usePetItemByType5(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         SocketConnection.sendByQueue(CommandID.USE_SPEEDUP_ITEM,[info.itemId],function():void
         {
         },function():void
         {
            dispatchUseItemFail(info);
         });
      }
      
      private function usePetItemByType6(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         AutomaticFightManager.useItem(info.itemId,function():void
         {
         });
      }
      
      private function usePetItemByType7(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         SocketConnection.sendByQueue(CommandID.USE_ENERGY_XISHOU,[info.itemId],function():void
         {
         });
      }
      
      private function usePetItemByType8(param1:PetPropInfo) : void
      {
         var _loc2_:Object = ItemXMLInfo.getItemInfo(param1.itemId);
         var _loc3_:int = int(_loc2_["EvRemove"]);
         var _loc4_:Array;
         var _loc5_:String = String((_loc4_ = ["ev_hp","ev_attack","ev_defence","ev_sa","ev_sd","ev_sp"])[_loc3_ - 1]);
         if(param1.petInfo[_loc5_] == 0)
         {
            Alarm2.show("你的<font color=\'#ff4545\'>" + param1.petInfo.name + "</font>不需要再使用此物品啦！");
         }
         else
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
         }
      }
      
      private function usePetItemByType9(param1:PetPropInfo) : void
      {
         var propInfo:PetPropInfo = param1;
         SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,[propInfo.petInfo.catchTime,propInfo.itemId],function():void
         {
            PetManager.upDateBagPetInfo(propInfo.petInfo.catchTime,function():void
            {
               var _loc2_:PetEffectInfo = null;
               var _loc4_:PetEffectInfo = null;
               var _loc5_:String = null;
               var _loc6_:String = null;
               var _loc1_:PetInfo = PetManager.getPetInfo(propInfo.petInfo.catchTime);
               var _loc3_:int = 0;
               while(_loc3_ < _loc1_.effectList.length)
               {
                  if(!((_loc4_ = _loc1_.effectList[_loc3_] as PetEffectInfo).effectID == 177 || _loc4_.effectID == 287))
                  {
                     if(_loc4_.status == 1 || _loc4_.status == 4)
                     {
                        if((_loc5_ = String(PetEffectXMLInfo.getEffect(_loc4_.effectID,_loc4_.args))).length <= "这四个字".length && _loc5_.length > 0)
                        {
                           if(!(_loc4_.effectID > 400 && _loc4_.effectID <= 420))
                           {
                              _loc2_ = _loc4_;
                           }
                           break;
                        }
                     }
                  }
                  _loc3_++;
               }
               if(_loc2_ != null)
               {
                  _loc6_ = String(PetEffectXMLInfo.getEffect(_loc2_.effectID,_loc2_.args));
                  Alarm2.show("精灵的特性变为了" + _loc6_);
               }
            });
         },function():void
         {
         });
      }
      
      private function usePetItemByType10(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         ShowFightHpManager.useItem(info.itemId,function():void
         {
         });
      }
      
      private function usePetItemByType11(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         if(info.petInfo.level < 100)
         {
            Alarm2.show("只有100级精灵才能开启通用刻印孔哦");
            return;
         }
         SocketConnection.sendByQueue(CommandID.ACTIVE_COUNTERMARK,[info.petInfo.catchTime],function():void
         {
            PetManager.upDateBagPetInfo(info.petInfo.catchTime,function():void
            {
               Alarm2.show("精灵的刻印已经成功开启！");
            });
         });
      }
      
      private function usePetItemByType12(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         StudyUpManager.useItem(info.itemId,function():void
         {
            dispatchUseItemSuccess(info);
         });
      }
      
      private function usePetItemByType13(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         NatureChoosePanel.show(PetXMLInfo.getName(info.petInfo.id),function(param1:uint):void
         {
            var nature:uint = param1;
            SocketConnection.sendByQueue(CommandID.PET_RESET_NATURE,[info.petInfo.catchTime,nature,info.itemId],function():void
            {
               var _loc1_:* = "<font color=\'#ff4545\'>" + PetXMLInfo.getName(info.petInfo.id) + "</font>的性格已经成功转换为<font color=\'#ff4545\'>" + NatureXMLInfo.getName(nature) + "！</font>";
               Alarm2.show(_loc1_);
            });
         });
      }
      
      private function usePetItemByType14(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         SocketConnection.sendByQueue(CommandID.SET_PET_CONST_FORM,[info.petInfo.catchTime,info.petInfo.id],function():void
         {
         });
      }
      
      private function usePetItemByType15(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         if(PetIdTransform.getHasTransform(info.petInfo.catchTime))
         {
            SocketConnection.sendByQueue(CommandID.SET_PET_CONST_FORM,[info.petInfo.catchTime,0],function():void
            {
            });
         }
         else
         {
            Alarm2.show(PetXMLInfo.getName(info.petInfo.id) + "未进行形态固定，无法使用形态还原胶囊哦！");
         }
      }
      
      private function usePetItemByType16(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         SocketConnection.sendByQueue(CommandID.FIRE_EDGE_REBORN_USE_BREED_CONVERT_ITEM,[info.petInfo.catchTime],function():void
         {
         });
      }
      
      private function usePetItemByType17(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_INCREASE_STUDY,[info.petInfo.catchTime,info.itemId],function():void
         {
         });
      }
      
      private function usePetItemByType18(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         var attr_name:Array = ["体力","攻击","防御","特攻","特防","速度"];
         var arr:Array = ["ev_hp","ev_attack","ev_defence","ev_sa","ev_sd","ev_sp"];
         var itemObj:Object = ItemXMLInfo.getItemInfo(info.itemId);
         var index:int = 0;
         var count:int = 0;
         var i:int = 0;
         while(i < attr_name.length)
         {
            if(itemObj["Name"].indexOf(attr_name[i]) >= 0)
            {
               index = i;
               count += 255;
            }
            else
            {
               count += info.petInfo[arr[i]];
            }
            i++;
         }
         if(info.petInfo[arr[index]] == 255)
         {
            Alarm2.show("你的<font color=\'#ff4545\'>" + PetXMLInfo.getName(info.petInfo.id) + "</font>的" + TextFormatUtil.getRedTxt(info.itemName.substr(0,5)) + "已满，无法注入哦！");
         }
         else if(count > 510)
         {
            Alarm2.show("你的<font color=\'#ff4545\'>" + PetXMLInfo.getName(info.petInfo.id) + "</font>的学习力总值不能超过510，无法注入哦！");
         }
         else
         {
            SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_FULL_ABILITY_OF_STUDY,[info.petInfo.catchTime,index,0,0],function():void
            {
            });
         }
      }
      
      private function usePetItemByType19(param1:PetPropInfo) : void
      {
         var onChoose:Function;
         var obj:Object;
         var info:PetPropInfo = param1;
         if(info.petInfo.totalEv >= 510)
         {
            Alarm2.show("学习力已满，无法注入");
            return;
         }
         onChoose = function(param1:int, param2:String):void
         {
            var id:int = param1;
            var abilityName:String = param2;
            SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_FULL_ABILITY_OF_STUDY,[info.petInfo.catchTime,id,0,1],function():void
            {
            });
         };
         obj = {
            "name":PetXMLInfo.getName(info.petInfo.id),
            "fun":onChoose,
            "petInfo":info.petInfo,
            "frame":2
         };
         ModuleManager.showModule(ClientConfig.getAppModule("LearningabilityChoosePanle"),"正在加载....",obj);
      }
      
      private function usePetItemByType20(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         getDefinitionByName("com.robot.app2.control.ChoosPetPropertyController").init(function(param1:int):void
         {
            ModuleManager.hideModule(ClientConfig.getAppModule("ChoosPetPropertyPanel"));
            SocketConnection.send(45151,info.petInfo.catchTime,param1,PetManager.curViewEffectIdx);
         });
      }
      
      private function usePetItemByType21(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         SocketConnection.sendByQueue(43603,[info.petInfo.catchTime,info.itemId],function():void
         {
         });
      }
      
      private function usePetItemByType22(param1:PetPropInfo) : void
      {
         var itemObj:Object;
         var level:int = 0;
         var info:PetPropInfo = param1;
         if(info.petInfo.level >= 100)
         {
            Alarm2.show("精灵已满级，不能使用此物品");
            return;
         }
         itemObj = ItemXMLInfo.getItemInfo(info.itemId);
         if(Boolean(itemObj["IncreMonLvTo"]) && itemObj["IncreMonLvTo"] > 0)
         {
            level = int(itemObj["IncreMonLvTo"]);
            if(info.petInfo.level >= level)
            {
               Alarm2.show("已达到" + level + "级，不能使用此物品");
               return;
            }
         }
         SocketConnection.sendByQueue(CommandID.UP_GRADE_MEDICINE,[info.itemId,info.petInfo.catchTime],function():void
         {
         });
      }
      
      private function usePetItemByType23(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         var item:ItemUseInfo = ItemUseXMLInfo.getInfoById(info.itemId);
         SocketConnection.sendByQueue(CommandID.UP_STAR_GAME_SPIRIT,[item.param,info.petInfo.catchTime],function():void
         {
         });
      }
      
      private function usePetItemByType24(param1:PetPropInfo) : void
      {
         var info:PetPropInfo = param1;
         if(!PetManager.containsBagForID(info.petInfo.id))
         {
            Alarm.show("请将精灵放入出战背包后使用");
            return;
         }
         SocketConnection.sendByQueue(41456,[info.itemId,info.petInfo.catchTime],function():void
         {
            Alarm.show("使用成功！");
            dispatchUseItemSuccess(info);
         });
      }
      
      private function dispatchUseItemSuccess(param1:PetPropInfo) : void
      {
         var _loc2_:RobotEvent = new RobotEvent(com.robot.app.control.ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL,false,false,param1);
         EventManager.dispatchEvent(_loc2_);
      }
      
      private function dispatchUseItemFail(param1:PetPropInfo) : void
      {
         var _loc2_:RobotEvent = new RobotEvent(com.robot.app.control.ItemUseManager.EVENT_USE_ITEM_FAILURE,false,false,param1);
         EventManager.dispatchEvent(_loc2_);
      }
   }
}
