package com.robot.module.app.petBag
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.control.ItemUseManager;
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.PetBagItemTypes;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.module.ModuleData;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.EventDispatcher;
   import flash.net.SharedObject;
   import org.taomee.ds.HashMap;
   import org.taomee.ds.HashSet;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class BagModuleData extends ModuleData
   {
       
      
      private var eventDispatcher:EventDispatcher;
      
      private var _petTargetIndexCache:HashMap;
      
      private var _itemIds:Array;
      
      private var _isOperating:Boolean;
      
      private var _fightItemIds:Array;
      
      public function BagModuleData(data:*)
      {
         this._petTargetIndexCache = new HashMap();
         super(data);
         this.init();
      }
      
      public function addEventListener(type:String, listener:Function, useCapture:Boolean = false, priority:int = 0, useWeak:Boolean = false) : void
      {
         this.eventDispatcher.addEventListener(type,listener,useCapture,priority,useWeak);
      }
      
      public function removeEventListener(type:String, listener:Function, useCapture:Boolean = false) : void
      {
         this.eventDispatcher.removeEventListener(type,listener,useCapture);
      }
      
      public function init() : void
      {
         var infos:Array = PetManager.infos;
         setData(DataKeys.FIRST_BAG_PETS,infos);
         var secondInfos:Array = PetManager.secondInfos;
         setData(DataKeys.SECOND_BAG_PETS,secondInfos);
         if(infos.length > 0)
         {
            setData(DataKeys.FOCUS_PET,infos[0]);
         }
         else
         {
            setData(DataKeys.FOCUS_PET,PetManager.secondInfos[0]);
         }
         this.addEvents();
      }
      
      public function sortPettoIndex(pid:int, index:int) : int
      {
         var arr:Array = this.firstBagInfos;
         for(var j:int = 0; j < arr.length; j++)
         {
            if(this.firstBagInfos[j].id == pid)
            {
               break;
            }
         }
         if(index != j && arr.length >= index)
         {
            this.swapPetIndex(this.firstBagInfos[j],this.firstBagInfos[index]);
            return 1;
         }
         return 0;
      }
      
      private function addEvents() : void
      {
         PetManager.addEventListener(PetEvent.EQUIP_SKIN,this.updateFocusPetInfo);
         PetManager.addEventListener(PetEvent.REMOVED,this.onPetRemoved);
         PetManager.addEventListener(PetEvent.ADDED,this.onPetAdd);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,this.onPetUpdate);
         PetManager.addEventListener(PetEvent.CURE_COMPLETE,this.onCure);
         PetManager.addEventListener(PetEvent.SET_DEFAULT,this.onSetDefault);
         for(var i:int = 0; i < CommandID.USEITEM_CMDS.length; i++)
         {
            SocketConnection.addCmdListener(CommandID.USEITEM_CMDS[i],this.onUseItem);
         }
         SocketConnection.addCmdListener(CommandID.USE_COUNTERMARK,this.onUseItem);
      }
      
      public function updateFocusPetInfo(e:* = null) : Promise
      {
         var der:Deferred = null;
         der = new Deferred();
         if(this.focusPet == null)
         {
            return Deferred.reject(null);
         }
         PetManager.upDateBagPetInfo(this.focusPet.catchTime,function(info:PetInfo):void
         {
            if(focusPet.catchTime == info.catchTime)
            {
               setData(DataKeys.FOCUS_PET,info);
            }
            for(var i:int = 0; i < firstBagInfos.length; i++)
            {
               if(firstBagInfos[i].catchTime == info.catchTime)
               {
                  firstBagInfos[i] = info;
                  break;
               }
            }
            for(i = 0; i < secondBagInfos.length; i++)
            {
               if(secondBagInfos[i].catchTime == info.catchTime)
               {
                  secondBagInfos[i] = info;
                  break;
               }
            }
            return der.resolve(null);
         });
         return der.promise;
      }
      
      public function setPetTargetIndex(catchTime:uint, index:int) : void
      {
         this._petTargetIndexCache.add(catchTime,index);
      }
      
      public function onUseItem(e:*) : void
      {
         if(this.focusPet == null)
         {
            return;
         }
         PetManager.upDateBagPetInfo(this.focusPet.catchTime);
      }
      
      public function swapPetIndex(petInfo0:PetInfo, petInfo1:PetInfo, type:String = "firstBagPets") : void
      {
         var array:Array = getData(type);
         array = array.concat();
         var index0:int = array.indexOf(petInfo0);
         var index1:int = array.indexOf(petInfo1);
         if(index0 == -1 || index1 == -1)
         {
            return;
         }
         array[index0] = petInfo1;
         array[index1] = petInfo0;
         setData(type,array);
         this.checkDefaultPet();
      }
      
      private function checkDefaultPet() : void
      {
         if(this.isOperating)
         {
            return;
         }
         if(this.firstBagInfos[0] == null)
         {
            return;
         }
         if((this.firstBagInfos[0] as PetInfo).isDefault == false)
         {
            PetManager.setDefault((this.firstBagInfos[0] as PetInfo).catchTime);
         }
         else
         {
            EventManager.dispatchEvent(new DynamicEvent("newseer_petBag_checkDefaultPet",this.firstBagInfos[0] as PetInfo));
         }
      }
      
      private function onSetDefault(event:PetEvent) : void
      {
         if(this.isOperating)
         {
            return;
         }
         PetManager.upDateByOnce();
      }
      
      private function onPetRemoved(event:PetEvent) : void
      {
         PetManager.upDateByOnce();
      }
      
      private function onCure(e:PetEvent) : void
      {
         PetManager.upDate(function():void
         {
            var infos:Array = PetManager.infos;
            infos.sortOn("isDefault",Array.DESCENDING);
            setData(DataKeys.FIRST_BAG_PETS,infos);
            setData(DataKeys.SECOND_BAG_PETS,PetManager.secondInfos);
            if(infos.length > 0)
            {
               setData(DataKeys.FOCUS_PET,infos[0]);
            }
            else
            {
               setData(DataKeys.FOCUS_PET,PetManager.secondInfos[0]);
            }
         });
      }
      
      private function onPetUpdate(e:PetEvent) : void
      {
         if(this.isOperating)
         {
            return;
         }
         var infos:Array = PetManager.infos;
         setData(DataKeys.FIRST_BAG_PETS,infos);
         var secondInfos:Array = PetManager.secondInfos;
         setData(DataKeys.SECOND_BAG_PETS,PetManager.secondInfos);
         if(this.focusPet == null)
         {
            if(infos.length > 0)
            {
               setData(DataKeys.FOCUS_PET,infos[0]);
            }
            else
            {
               setData(DataKeys.FOCUS_PET,PetManager.secondInfos[0]);
            }
         }
         for(var i:int = 0; i < this.firstBagInfos.length; i++)
         {
            if((this.firstBagInfos[i] as PetInfo).catchTime == e.catchTime())
            {
               this.firstBagInfos[i] = PetManager.getPetInfo(e.catchTime());
               break;
            }
         }
         for(i = 0; i < this.secondBagInfos.length; i++)
         {
            if((this.secondBagInfos[i] as PetInfo).catchTime == e.catchTime())
            {
               this.secondBagInfos[i] = PetManager.getPetInfo(e.catchTime());
               break;
            }
         }
         if(this.focusPet != null && e.catchTime() == this.focusPet.catchTime)
         {
            setData(DataKeys.FOCUS_PET,PetManager.getPetInfo(e.catchTime()));
         }
         this.checkDefaultPet();
      }
      
      private function onPetAdd(event:PetEvent) : void
      {
         PetManager.upDateByOnce();
      }
      
      private function getPetIndex(arr:Array, catchTime:uint) : int
      {
         var result:int = -1;
         for(var i:int = 0; i < arr.length; i++)
         {
            if((arr[i] as PetInfo).catchTime == catchTime)
            {
               return i;
            }
         }
         return result;
      }
      
      public function get focusPet() : PetInfo
      {
         return getData(DataKeys.FOCUS_PET);
      }
      
      public function set focusPet(pet:PetInfo) : void
      {
         setData(DataKeys.FOCUS_PET,pet);
      }
      
      public function get firstBagInfos() : Array
      {
         return getData(DataKeys.FIRST_BAG_PETS);
      }
      
      public function get secondBagInfos() : Array
      {
         return getData(DataKeys.SECOND_BAG_PETS);
      }
      
      public function get isOperating() : Boolean
      {
         return this._isOperating;
      }
      
      public function set isOperating(va:Boolean) : void
      {
         if(this._isOperating != va)
         {
            this._isOperating = va;
            if(!va)
            {
               PetManager.upDateByOnce();
            }
         }
      }
      
      private function sortByCache(type:String) : void
      {
         var oldArr:Array = null;
         var arr:Array = null;
         var so:SharedObject = SOManager.getUserSO(DataKeys.FIRST_BAG_PETS);
         if(so.data[DataKeys.FIRST_BAG_PETS] == null)
         {
            return;
         }
         if(type == DataKeys.FIRST_BAG_PETS)
         {
            oldArr = so.data[DataKeys.FIRST_BAG_PETS];
            arr = this.firstBagInfos;
         }
         else
         {
            oldArr = so.data[DataKeys.SECOND_BAG_PETS];
            arr = this.secondBagInfos;
         }
         arr.sortOn("sortIndex",Array.NUMERIC);
      }
      
      private function savePetsIndex() : void
      {
         var so:SharedObject = SOManager.getUserSO(DataKeys.FIRST_BAG_PETS);
         so.data[DataKeys.FIRST_BAG_PETS] = this.getPetsCatchTimes(this.firstBagInfos);
         so.data[DataKeys.SECOND_BAG_PETS] = this.getPetsCatchTimes(this.secondBagInfos);
         so.flush();
      }
      
      private function getPetsCatchTimes(arr:Array) : Array
      {
         var result:Array = [];
         for(var i:int = 0; i < arr.length; i++)
         {
            result.push((arr[i] as PetInfo).catchTime);
         }
         return result;
      }
      
      override public function destory() : void
      {
         for(var i:int = 0; i < CommandID.USEITEM_CMDS.length; i++)
         {
            SocketConnection.removeCmdListener(CommandID.USEITEM_CMDS[i],this.onUseItem);
         }
         this.eventDispatcher = null;
         PetManager.removeEventListener(PetEvent.REMOVED,this.onPetRemoved);
         PetManager.removeEventListener(PetEvent.ADDED,this.onPetAdd);
         PetManager.removeEventListener(PetEvent.UPDATE_INFO,this.onPetUpdate);
         PetManager.removeEventListener(PetEvent.CURE_COMPLETE,this.onCure);
         PetManager.removeEventListener(PetEvent.EQUIP_SKIN,this.updateFocusPetInfo);
         PetManager.removeEventListener(PetEvent.SET_DEFAULT,this.onSetDefault);
         SocketConnection.removeCmdListener(CommandID.USE_COUNTERMARK,this.onUseItem);
         this._petTargetIndexCache.clear();
         this._petTargetIndexCache = null;
         this._itemIds = null;
         super.destory();
      }
      
      public function getPetBagFightItemIds() : Array
      {
         if(this._fightItemIds == null)
         {
            this._fightItemIds = ItemXMLInfo.getItemIdsByBagItemType(PetBagItemTypes.FIGHT_ALL);
            this._fightItemIds.sort();
         }
         return this._fightItemIds;
      }
      
      public function getPetBagItemIds() : Array
      {
         var set:HashSet = null;
         var allTypes:Array = null;
         var i:int = 0;
         var type:int = 0;
         var ids:Array = null;
         var j:int = 0;
         if(this._itemIds == null)
         {
            set = new HashSet();
            allTypes = [PetBagItemTypes.LEVEL_ALL,PetBagItemTypes.CHANGE,PetBagItemTypes.FIGHT,PetBagItemTypes.ABILITY,PetBagItemTypes.EFFECT,PetBagItemTypes.EX_HP,PetBagItemTypes.LEVEL_UP,PetBagItemTypes.NATURE,PetBagItemTypes.TALENT];
            for(i = 0; i < allTypes.length; i++)
            {
               type = int(allTypes[i]);
               ids = ItemXMLInfo.getItemIdsByBagItemType(type);
               for(j = 0; j < ids.length; j++)
               {
                  set.add(ids[j]);
               }
            }
            this._itemIds = set.toArray();
            this._itemIds.sort(this.sortFun);
         }
         return this._itemIds;
      }
      
      private function sortFun(idA:int, idB:int) : int
      {
         if(idA == 300699)
         {
            return -1;
         }
         if(idB == 300699)
         {
            return 1;
         }
         if(ItemXMLInfo.getCatID(idA) == 16)
         {
            return -1;
         }
         if(ItemXMLInfo.getCatID(idB) == 16)
         {
            return 1;
         }
         return 1;
      }
      
      public function useOnePetItem(itemIds:Array, petInfo:PetInfo) : Promise
      {
         return ItemManager.updateItems(itemIds).then(function():Promise
         {
            var itemId:* = 0;
            for(var i:* = 0; i < itemIds.length; i++)
            {
               if(ItemManager.getNumByID(itemIds[i]) > 0)
               {
                  itemId = itemIds[i];
                  break;
               }
            }
            if(itemId == 0)
            {
               Alarm2.show("背包中没有" + ItemXMLInfo.getName(itemIds[0]));
               return Deferred.reject(null);
            }
            return Deferred.resolve(itemId);
         }).then(function(itemId:int):void
         {
            var propInfo:* = new PetPropInfo();
            propInfo.petInfo = focusPet;
            propInfo.itemId = itemId;
            propInfo.itemName = ItemXMLInfo.getName(itemId);
            ItemUseManager.getInstance().usePetItem(propInfo,itemId);
         });
      }
   }
}
