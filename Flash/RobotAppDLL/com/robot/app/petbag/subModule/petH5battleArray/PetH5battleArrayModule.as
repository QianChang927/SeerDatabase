package com.robot.module.app.petBag.subModule.petH5battleArray
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.module.SubModuleController;
   import com.robot.core.net.SocketConnection;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class PetH5battleArrayModule extends PetBagSubModule
   {
       
      
      private var _subModuleController:SubModuleController;
      
      private var _curBagIndex:int;
      
      private var _goalIndex:int;
      
      private var _forverIdArr:Array;
      
      private var _infoArrs:Array;
      
      private var _allInfoHash:HashMap;
      
      private var _openNum:int;
      
      private var _banPetId:int;
      
      private var p1:Array;
      
      private var p2:Array;
      
      public function PetH5battleArrayModule()
      {
         this._forverIdArr = [[101770,101771,101772,101773,101774,101775,101776,101777,101778,101779,101780,101781],[101782,101783,101784,101785,101786,101787,101788,101789,101790,101791,101792,101793],[101794,101795,101796,101797,101798,101799,101800,101801,101802,101803,101804,101805],[101806,101807,101808,101809,101810,101811,101812,101813,101814,101815,101816,101817]];
         super();
         initUi("petH5battleArray");
         this.initList();
         this._eventCom.addEvent(_ui["tipsMc2"].tishiMc.btnMc,MouseEvent.CLICK,this.ontishiBtn);
         _ui["tipsMc2"].tishiMc.btnMc.buttonMode = true;
      }
      
      override public function destory() : void
      {
         this._subModuleController.destory();
         this._subModuleController = null;
         this._forverIdArr = null;
         this._infoArrs = null;
         this._allInfoHash.clear();
         this._allInfoHash = null;
         this.clearPetItemview();
         super.destory();
      }
      
      protected function ontishiBtn(e:MouseEvent) : void
      {
         if(!BufferRecordManager.getMyState(1486))
         {
            BufferRecordManager.setMyState(1486,true,function():void
            {
               _ui["tipsMc2"].tishiMc.btnMc.gotoAndStop(2);
            });
         }
         else
         {
            BufferRecordManager.setMyState(1486,false,function():void
            {
               _ui["tipsMc2"].tishiMc.btnMc.gotoAndStop(1);
            });
         }
      }
      
      protected function initList() : void
      {
         this._subModuleController = new SubModuleController(this);
         SocketConnection.addCmdListener(42376,function(e:SocketEvent):void
         {
            SocketConnection.removeCmdListener(42376,arguments.callee);
            var b:ByteArray = e.data as ByteArray;
            b.position = 0;
            _banPetId = b.readUnsignedInt();
            update();
         });
         SocketConnection.send(42376,2,0);
      }
      
      public function get iconList() : Array
      {
         return this._subModuleController.subModules;
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         var btnName:String = String(e.target.name);
         var index:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "goOnBtn":
               _ui["tipsMc1"].visible = false;
               _ui["tipsMc2"].visible = true;
               break;
            case "blackBtn":
               _ui["tipsMc2"].visible = false;
               _ui["tipsMc1"].visible = true;
               break;
            case "startBtn":
               _ui["tipsMc2"].visible = false;
         }
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
      
      private function getBagscatchTimes() : Array
      {
         var info0:PetListInfo = null;
         var info1:PetListInfo = null;
         var info2:PetListInfo = null;
         var infoArr1:Array = PetManager.getBagMap(false);
         var infoArr2:Array = PetManager.getSecondBagMap();
         var arr1:Array = new Array();
         var arr2:Array = new Array();
         var arr:Array = new Array();
         trace(PetManager.defaultTime + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
         for(var j:int = 0; j < 6; j++)
         {
            info0 = infoArr1[j];
            if(info0 != null)
            {
               if(PetManager.defaultTime == info0.catchTime)
               {
                  arr1.push(infoArr1[j].catchTime);
               }
            }
         }
         for(var i:int = 0; i < 6; i++)
         {
            info1 = infoArr1[i];
            if(info1 == null)
            {
               arr1.push(0);
            }
            else if(info1.catchTime != PetManager.defaultTime)
            {
               arr1.push(info1.catchTime);
            }
         }
         for(var k:int = 0; k < 6; k++)
         {
            info2 = infoArr2[k];
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
      
      public function update() : void
      {
         var firstbagArr:Array;
         var secdbagArr:Array;
         var arr1:Array;
         var arr2:Array;
         var i:int;
         var catchTime:int = 0;
         var petInfo:PetInfo = null;
         var petItemview1:PetBagH5battleArrayFirstPetItemView = null;
         var petItemview2:PetBagH5battleArraySecondPetItemView = null;
         if(!BufferRecordManager.getMyState(1485))
         {
            BufferRecordManager.setMyState(1485,true,function():void
            {
               _ui["tipsMc2"].tishiMc.visible = false;
            });
         }
         else
         {
            _ui["tipsMc2"].tishiMc.visible = true;
         }
         if(!BufferRecordManager.getMyState(1486))
         {
            _ui["tipsMc1"].visible = true;
            _ui["tipsMc2"].visible = false;
         }
         else
         {
            _ui["tipsMc1"].visible = false;
            _ui["tipsMc2"].visible = false;
         }
         this.clearPetItemview();
         this.p1 = [];
         this.p2 = [];
         firstbagArr = this.getBagscatchTimes()[0];
         secdbagArr = this.getBagscatchTimes()[1];
         arr1 = firstbagArr;
         arr2 = secdbagArr;
         i = 0;
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
            petInfo = PetManager.getPetInfo(catchTime);
            petItemview1 = new PetBagH5battleArrayFirstPetItemView(i,petInfo,this.getType(petInfo));
            petItemview1.x = 174.65 + i * 104;
            petItemview1.y = 84.2;
            _ui["savePanel"]["containerMc"].addChild(petItemview1);
            this.p1.push(petItemview1);
         }
         for(i = 0; i < 6; i++)
         {
            if(i < arr2.length)
            {
               catchTime = int(arr2[i]);
            }
            else
            {
               catchTime = 0;
            }
            petInfo = PetManager.getPetInfo(catchTime);
            petItemview2 = new PetBagH5battleArraySecondPetItemView(i,petInfo,this.getType(petInfo));
            petItemview2.x = 166.75 + i * 105;
            petItemview2.y = 205.6;
            _ui["savePanel"]["containerMc"].addChild(petItemview2);
            this.p2.push(petItemview2);
         }
      }
      
      public function clearPetItemview() : void
      {
         var i:int = 0;
         var j:int = 0;
         if(Boolean(this.p1))
         {
            for(i = 0; i < this.p1.length; i++)
            {
               DisplayUtil.removeForParent(this.p1[i],false);
               this.p1[i].destory();
               this.p1[i] = null;
            }
            this.p1 = null;
         }
         if(Boolean(this.p2))
         {
            for(j = 0; j < this.p2.length; j++)
            {
               DisplayUtil.removeForParent(this.p2[j],false);
               this.p2[j].destory();
               this.p2[j] = null;
            }
            this.p2 = null;
         }
      }
      
      private function getChongfuId() : int
      {
         var info:PetInfo = null;
         var i:int = 0;
         var arr:Array = [];
         for each(info in PetManager.allInfos)
         {
            arr.push(info.id);
         }
         arr.sort();
         for(i = 0; i < arr.length - 1; i++)
         {
            if(arr[i] == arr[i + 1])
            {
               return arr[i];
            }
         }
         return 0;
      }
      
      private function getType(petInfo:PetInfo) : int
      {
         if(petInfo == null)
         {
            return 0;
         }
         if(petInfo.level < 100)
         {
            return 1;
         }
         if(petInfo.hp < petInfo.maxHp)
         {
            return 2;
         }
         if(this._banPetId == petInfo.id)
         {
            return 4;
         }
         if(this.getChongfuId() > 0 && petInfo.id == this.getChongfuId())
         {
            return 3;
         }
         return 0;
      }
   }
}
