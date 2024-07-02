package com.robot.module.app.petBag.subModule.petBagChoose
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.info.pet.PetStorage2015PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.module.SubModuleController;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class PetBagChooseModule extends PetBagSubModule
   {
       
      
      private var _subModuleController:SubModuleController;
      
      private var _curBagIndex:int;
      
      private var _goalIndex:int;
      
      private var _forverIdArr:Array;
      
      private var _infoArrs:Array;
      
      private var _allInfoHash:HashMap;
      
      private var _openNum:int;
      
      private var _isShowTips:Boolean = false;
      
      private var _bagToStorageArr:Array;
      
      private var _storageToBagArr:Array;
      
      public function PetBagChooseModule()
      {
         this._forverIdArr = [[101770,101771,101772,101773,101774,101775,101776,101777,101778,101779,101780,101781],[101782,101783,101784,101785,101786,101787,101788,101789,101790,101791,101792,101793],[101794,101795,101796,101797,101798,101799,101800,101801,101802,101803,101804,101805],[101806,101807,101808,101809,101810,101811,101812,101813,101814,101815,101816,101817]];
         super();
         initUi("petBagChoose");
         this.initList();
         for(var i:int = 0; i < 4; i++)
         {
            this._eventCom.addRollOverEvent(_ui["mc_" + i],this.onRolloOver);
            this._eventCom.addRollOutEvent(_ui["mc_" + i],this.onRolloOut);
         }
      }
      
      protected function initList() : void
      {
         this._subModuleController = new SubModuleController(this);
         this.update();
      }
      
      override public function destory() : void
      {
         SocketConnection.removeCmdListener(41466,this.sendToServerCallBack);
         this._subModuleController.destory();
         this._subModuleController = null;
         this._forverIdArr = null;
         this._infoArrs = null;
         this._allInfoHash = null;
         this._bagToStorageArr = null;
         this._storageToBagArr = null;
         super.destory();
      }
      
      public function get iconList() : Array
      {
         return this._subModuleController.subModules;
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         var index:int = 0;
         var btnName:String = String(e.target.name);
         index = int(e.target.parent.name.split("_")[1]);
         var string:String = String(e.target.parent.name.split("_")[0]);
         if(string == "mc")
         {
            this._goalIndex = index;
         }
         switch(btnName)
         {
            case "switchBtn":
               if(this._goalIndex != this._curBagIndex)
               {
                  LevelManager.closeAllMouseEvent();
                  this.inquireCathTimes(this._curBagIndex,function(va:Array):void
                  {
                     var i:int = 0;
                     var j:int = 0;
                     var info:PetListInfo = null;
                     var info1:PetListInfo = null;
                     var info2:PetListInfo = null;
                     LevelManager.openMouseEvent();
                     var isChange:Boolean = false;
                     var arr1:Array = PetManager.getBagMap(false);
                     var arr2:Array = PetManager.getSecondBagMap();
                     if(arr1.length != va[0].length || arr2.length != va[1].length)
                     {
                        isChange = true;
                     }
                     else
                     {
                        for(i = 0; i < arr1.length; i++)
                        {
                           info1 = arr1[i];
                           if(info1.catchTime != va[0][i])
                           {
                              isChange = true;
                           }
                        }
                        for(j = 0; j < arr2.length; j++)
                        {
                           info2 = arr2[j];
                           if(info2.catchTime != va[1][j])
                           {
                              isChange = true;
                           }
                        }
                        info = arr1[0];
                        if(info != null)
                        {
                           if(va[0][0] != info.catchTime)
                           {
                              isChange = true;
                           }
                        }
                     }
                     if(isChange)
                     {
                        showAlert();
                     }
                     else
                     {
                        sendToServer(3);
                     }
                  });
               }
               break;
            case "lockBtn":
               KTool.buyProductByCallback(255612 + index - 1,1,function():void
               {
                  SocketConnection.sendByQueue(42382,[1,index],function(e:*):void
                  {
                     SocketConnection.removeCmdListener(42382,arguments.callee);
                     update();
                  });
               },_ui);
               break;
            case "close":
               _ui["alertMc"].visible = false;
               break;
            case "saveBtn":
               _ui["alertMc"].visible = false;
               this.sendToServer(2);
               break;
            case "notSaveBtn":
               _ui["alertMc"].visible = false;
               this.sendToServer(3);
         }
      }
      
      private function sendToServer(flag:int) : void
      {
         SocketConnection.sendByQueue(41466,[flag,this._goalIndex],this.sendToServerCallBack);
      }
      
      private function sendToServerCallBack(e:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(41466,this.sendToServerCallBack);
         this._bagToStorageArr = [];
         this._storageToBagArr = [];
         var b:ByteArray = e.data as ByteArray;
         var result:int = int(b.readUnsignedInt());
         var len1:int = int(b.readUnsignedInt());
         for(var i:int = 0; i < len1; i++)
         {
            this._bagToStorageArr.push(int(b.readUnsignedInt()));
         }
         var len2:int = int(b.readUnsignedInt());
         for(var j:int = 0; j < len2; j++)
         {
            this._storageToBagArr.push(int(b.readUnsignedInt()));
         }
         this.operating();
      }
      
      private function showAlert() : void
      {
         _ui["alertMc"].visible = true;
      }
      
      private function update() : void
      {
         _ui["loadingMc"].visible = false;
         _ui["alertMc"].visible = false;
         _ui["tipsMc"].visible = false;
         KTool.getMultiValue([101768,101769],function(va:Array):void
         {
            _curBagIndex = va[0];
            _openNum = va[1];
            for(var i:int = 0; i < 4; i++)
            {
               if(i <= _openNum)
               {
                  _ui["mc_" + i].gotoAndStop(1);
                  _ui["mc_" + _curBagIndex].gotoAndStop(2);
               }
               else
               {
                  if(i - 1 == _openNum)
                  {
                     CommonUI.setEnabled(_ui["mc_" + i],true,false);
                  }
                  else
                  {
                     CommonUI.setEnabled(_ui["mc_" + i],false,true);
                  }
                  _ui["mc_" + i].gotoAndStop(3);
               }
            }
         });
      }
      
      private function inquireCathTimes(index:int, callBlack:Function = null) : void
      {
         KTool.getMultiValue(this._forverIdArr[index],function(va:Array):void
         {
            var arr:Array = new Array();
            var arr1:Array = new Array();
            var arr2:Array = new Array();
            for(var i:int = 0; i < 6; i++)
            {
               if(va[i] > 0)
               {
                  arr1.push(va[i]);
               }
               if(va[i + 6] > 0)
               {
                  arr2.push(va[i + 6]);
               }
            }
            arr.push(arr1);
            arr.push(arr2);
            if(callBlack != null)
            {
               callBlack(arr);
            }
         });
      }
      
      private function inquireCathTimes2(index:int, callBlack:Function = null) : void
      {
         KTool.getMultiValue(this._forverIdArr[index],function(va:Array):void
         {
            var petStoragePetInfo:PetStorage2015PetInfo = null;
            var startIndex1:int = 0;
            var startIndex2:int = 0;
            var arr:Array = new Array();
            var arr1:Array = new Array();
            var arr2:Array = new Array();
            for(var i:int = 0; i < 6; i++)
            {
               if(va[i] > 0 && _allInfoHash.getValue(va[i]) != null)
               {
                  arr1.push(va[i]);
               }
               if(va[i + 6] > 0 && _allInfoHash.getValue(va[i + 6]) != null)
               {
                  arr2.push(va[i + 6]);
               }
            }
            for each(petStoragePetInfo in _infoArrs)
            {
               startIndex1 = arr1.indexOf(petStoragePetInfo.catchTime);
               if(startIndex1 >= 0)
               {
                  arr1.splice(startIndex1,1);
                  Alarm2.show(PetXMLInfo.getName(petStoragePetInfo.id) + "正位于特殊区域中，无法移动至背包");
                  trace("出战背包移除出战背包移除出战背包移除出战背包移除出战背包移除-----------》" + PetXMLInfo.getName(petStoragePetInfo.id));
               }
               startIndex2 = arr2.indexOf(petStoragePetInfo.catchTime);
               if(startIndex2 >= 0)
               {
                  arr2.splice(startIndex2,1);
                  Alarm2.show(PetXMLInfo.getName(petStoragePetInfo.id) + "正位于特殊区域中，无法移动至背包");
                  trace("待命背包移除待命背包移除待命背包移除待命背包移除待命背包移除-----------》" + PetXMLInfo.getName(petStoragePetInfo.id));
               }
            }
            arr.push(arr1);
            arr.push(arr2);
            if(callBlack != null)
            {
               callBlack(arr);
            }
         });
      }
      
      private function operating() : void
      {
         moduleData.focusPet = null;
         this.update();
         PetManager.upDateByOnce();
         if(Boolean(PetManager.showInfo))
         {
            if(this._bagToStorageArr.indexOf(PetManager.showInfo.catchTime) >= 0)
            {
               PetManager.hidePet(false);
            }
         }
         this.putpettoStore();
         this.setpetRemoveFromStore();
      }
      
      private function putpettoStore() : void
      {
         var catchTime:int = 0;
         if(Boolean(this._bagToStorageArr) && this._bagToStorageArr.length > 0)
         {
            catchTime = this._bagToStorageArr.shift() as int;
            SocketConnection.sendWithCallback(CommandID.GET_PET_INFO,function(e1:SocketEvent):void
            {
               var data1:PetInfo = e1.data as PetInfo;
               PetManager.addStorage(data1.id,data1.catchTime,data1.level,function():void
               {
                  putpettoStore();
               });
            },[catchTime]);
         }
      }
      
      private function setpetRemoveFromStore() : void
      {
         var catchTime:int = 0;
         if(Boolean(this._storageToBagArr) && this._storageToBagArr.length > 0)
         {
            catchTime = this._storageToBagArr.shift() as int;
            PetManager.removeStorage(catchTime);
         }
      }
      
      private function onRolloOver(e:* = null) : void
      {
         var index:int = 0;
         index = int(e.currentTarget.name.split("_")[1]);
         if(index > this._openNum)
         {
            return;
         }
         this._isShowTips = true;
         this.inquireCathTimes(index,function(va:Array):void
         {
            var i:int = 0;
            var arr1:Array = null;
            var arr2:Array = null;
            var catchTime:int = 0;
            var petListInfo:PetListInfo = null;
            var isSetRed:Boolean = false;
            var petItemview1:PetBagbattleArrayFirstPetItemView = null;
            var catchTime1:int = 0;
            var petListInfo1:PetListInfo = null;
            var isSetRed1:Boolean = false;
            var petItemview2:PetBagbattleArraySecondPetItemView = null;
            var firstbagArr:Array = getBagscatchTimes()[0];
            var secdbagArr:Array = getBagscatchTimes()[1];
            if(va[0].length == 0 && va[1].length == 0 && index == 0 && _openNum == 0)
            {
               arr1 = firstbagArr;
               arr2 = secdbagArr;
            }
            else
            {
               arr1 = va[0];
               arr2 = va[1];
            }
            for(i = 0; i < 6; i++)
            {
               if(i < arr1.length)
               {
                  catchTime = int(arr1[i]);
               }
               else
               {
                  catchTime = 0;
               }
               petListInfo = catchTime > 0 ? getPetListInfo(index,catchTime) : null;
               isSetRed = false;
               petItemview1 = new PetBagbattleArrayFirstPetItemView(i,petListInfo,isSetRed);
               petItemview1.x = 266.45 + i * 95;
               petItemview1.y = 220.8;
               _ui["tipsMc"]["mcContainer"].addChild(petItemview1);
            }
            for(i = 0; i < 6; i++)
            {
               if(i < arr2.length)
               {
                  catchTime1 = int(arr2[i]);
               }
               else
               {
                  catchTime1 = 0;
               }
               petListInfo1 = getPetListInfo(index,catchTime1);
               isSetRed1 = false;
               petItemview2 = new PetBagbattleArraySecondPetItemView(i,petListInfo1,isSetRed1);
               petItemview2.x = 266.55 + i * 85;
               petItemview2.y = 320.25;
               _ui["tipsMc"]["mcContainer"].addChild(petItemview2);
            }
            if(_isShowTips)
            {
               _ui["tipsMc"].visible = true;
            }
         });
      }
      
      private function getPetListInfo(index:int, catchTime:int) : PetListInfo
      {
         var petListInfo:PetListInfo = null;
         var petInfo:PetInfo = null;
         if(index != this._curBagIndex)
         {
            if(PetManager.containsLovePetForCapTime(catchTime))
            {
               petListInfo = PetManager.getLovePetInfoByCapTime(catchTime);
            }
            else
            {
               petListInfo = PetManager.getPetInfoStorageForCapTime(catchTime);
               if(petListInfo == null)
               {
                  petInfo = PetManager.getPetInfo(catchTime);
                  if(petInfo != null)
                  {
                     petListInfo = new PetListInfo();
                     petListInfo.id = petInfo.id;
                     petListInfo.level = petInfo.level;
                     petListInfo.catchTime = petInfo.catchTime;
                  }
               }
            }
         }
         else
         {
            petInfo = PetManager.getPetInfo(catchTime);
            if(petInfo != null)
            {
               petListInfo = new PetListInfo();
               petListInfo.id = petInfo.id;
               petListInfo.level = petInfo.level;
               petListInfo.catchTime = petInfo.catchTime;
            }
            else
            {
               petListInfo = PetManager.getPetInfoStorageForCapTime(catchTime);
            }
            if(petListInfo == null)
            {
               if(PetManager.containsLovePetForCapTime(catchTime))
               {
                  petListInfo = PetManager.getLovePetInfoByCapTime(catchTime);
               }
            }
         }
         return petListInfo;
      }
      
      private function onRolloOut(e:* = null) : void
      {
         var index:int = int(e.currentTarget.name.split("_")[1]);
         _ui["tipsMc"].visible = false;
         DisplayUtil.removeAllChild(_ui["tipsMc"]["mcContainer"]);
         this._isShowTips = false;
      }
      
      private function getBagscatchTimes() : Array
      {
         var info1:PetListInfo = null;
         var info2:PetListInfo = null;
         var infoArr1:Array = PetManager.getBagMap(false);
         var infoArr2:Array = PetManager.getSecondBagMap();
         var arr1:Array = new Array();
         var arr2:Array = new Array();
         var arr:Array = new Array();
         for(var i:int = 0; i < 6; i++)
         {
            info1 = infoArr1[i];
            if(info1 == null)
            {
               arr1.push(0);
            }
            else
            {
               arr1.push(info1.catchTime);
            }
         }
         for(var j:int = 0; j < 6; j++)
         {
            info2 = infoArr2[j];
            if(info2 == null)
            {
               arr2.push(0);
            }
            else
            {
               arr2.push(info2.catchTime);
            }
         }
         arr.push(arr1);
         arr.push(arr2);
         return arr;
      }
   }
}
