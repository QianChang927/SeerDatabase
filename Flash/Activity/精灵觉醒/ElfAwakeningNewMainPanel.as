package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ElfAwakeningNewXmlInfo;
   import com.robot.core.controller.ElfAwakeningNewController;
   import com.robot.core.controller.RedSystemController;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.uic.UIScrollBarX;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ElfAwakeningNewMainPanel extends ActivityModel
   {
      private var curType:int;
      
      private var _curIndex:int;
      
      private var curPet:Object;
      
      private var nextPet:Object;
      
      private var lastPets:Array;
      
      private var openedLastPetsFree:Array;
      
      private var openedLastPetsMoney:Array;
      
      private var scrollBar:UIScrollBarX;
      
      private var _selectPetIdx:int;
      
      private var lastPetsState:Array;
      
      private var curList:Array;
      
      private var _itemNum:int;
      
      private var _itemNumMoney:int;
      
      private var _oCurIndex:int;
      
      private var _showPetInfo:Object;
      
      private var moneyPage:int;
      
      private var allPetState:HashMap;
      
      private var timeStamp:int;
      
      private var showIndex:int = -1;
      
      private var showAwakenId:int = -1;
      
      private var red3Show:Boolean;
      
      private var curFree:Boolean = false;
      
      public function ElfAwakeningNewMainPanel()
      {
         super();
         resUrl = "2024/1129/ElfAwakeningNewMainPanel";
         configUrl = "2024/1129/ElfAwakeningNew";
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data is int)
         {
            this.showIndex = int(data);
         }
         else
         {
            this.showIndex = data.idx;
            this.showAwakenId = data.aid;
         }
      }
      
      override public function show() : void
      {
         ElfAwakeningNewController.instance.getAllState(function(arr:HashMap):void
         {
            _itemNum = ElfAwakeningNewController.instance.itemNum;
            timeStamp = ElfAwakeningNewController.instance.timeStamp;
            allPetState = arr;
            superShow();
         });
      }
      
      private function showRed(e:* = null) : void
      {
         var reds:HashMap = null;
         for(var j:int = 0; j < 3; j++)
         {
            _ui["red_" + j].visible = false;
         }
         if(Boolean(_ui["red_0"]))
         {
            reds = RedSystemController.instance.getredHash();
            _ui["red_0"].visible = reds.getValue(100) && reds.getValue(100) > 0;
         }
         this.updateRed1();
      }
      
      private function updateRed1() : void
      {
      }
      
      private function superShow() : void
      {
         super.show();
         EventManager.addEventListener(RedSystemController.RED_UPDATED,this.showRed);
         this.curPet = ElfAwakeningNewXmlInfo.getCurPet();
         this.lastPets = ElfAwakeningNewXmlInfo.getLastPets();
         this.nextPet = ElfAwakeningNewXmlInfo.getNextPet();
         this.openedLastPetsFree = ElfAwakeningNewController.instance.getLastOpenPetsFree();
         this.openedLastPetsMoney = ElfAwakeningNewController.instance.getLastOpenPetsMoney();
         if(this.showIndex == -1)
         {
            this.curIndex = 1;
         }
         else
         {
            this.curIndex = this.showIndex;
         }
         _ui["sub"].visible = false;
         this.scrollBar = new UIScrollBarX(ui["sub"]["bar"]["slider"],ui["sub"]["bar"]["track"],1,ui["sub"]["bar"]["upArrow"],ui["sub"]["bar"]["downArrow"]);
         this.scrollBar.wheelObject = ui["sub"];
         this.scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         _ui["tip1"].visible = false;
         _ui["tip2"].visible = false;
         eventCom.addRollOverEvent(_ui["tipBtn"],this.tipBtnOverHandle);
         eventCom.addRollOutEvent(_ui["tipBtn"],this.tipBtnOutHandle);
         this.updateItem();
         this.showRed();
         if(this.showIndex != -1 && this.showAwakenId != -1 && this.curIndex == 0)
         {
            this.showAwakenPage();
         }
      }
      
      private function showAwakenPage() : void
      {
         for(var j:int = 0; j < this.openedLastPetsFree.length; j++)
         {
            if(this.openedLastPetsFree[j].id == this.showAwakenId)
            {
               this.oCurIndex = 0;
               return;
            }
         }
         for(var k:int = 0; k < this.openedLastPetsMoney.length; k++)
         {
            if(this.openedLastPetsMoney[k].id == this.showAwakenId)
            {
               this.oCurIndex = 1;
               this.moneyPage = 0;
               this.showMoneyPage(k);
               break;
            }
         }
      }
      
      private function tipBtnOverHandle(e:MouseEvent) : void
      {
         var day:int = 0;
         var endTime:Date = null;
         var leftTime:int = 0;
         if(this._itemNum > 0)
         {
            _ui["tip1"].visible = true;
         }
         else
         {
            _ui["tip2"].visible = true;
            day = 0;
            if(this.timeStamp != 0)
            {
               endTime = new Date(this.timeStamp * 1000);
               leftTime = endTime.time / 1000 - SystemTimerManager.time;
               day = Math.ceil(leftTime / (3600 * 24));
            }
            _ui["tip2"]["txt"].text = day;
         }
      }
      
      private function tipBtnOutHandle(e:MouseEvent) : void
      {
         _ui["tip1"].visible = false;
         _ui["tip2"].visible = false;
      }
      
      private function updateItem() : void
      {
         ItemManager.updateItems([1726442],function():void
         {
            if(_ui == null)
            {
               return;
            }
            _itemNumMoney = ItemManager.getNumByID(1726442);
            if(oCurIndex == 0)
            {
               if(Boolean(_ui["rBtnMc"]["num"]))
               {
                  _ui["rBtnMc"]["num"].text = _itemNum;
               }
               if(Boolean(_ui["rBtnMc"]["openGkFree"]))
               {
                  CommonUI.setEnabled(_ui["rBtnMc"]["openGkFree"],_itemNum > 0);
               }
            }
            else if(Boolean(_ui["rBtnMc"]["num"]))
            {
               _ui["rBtnMc"]["num"].text = _itemNumMoney;
            }
            _ui["itemMc"]["num"].text = _itemNumMoney;
            if(curFree)
            {
               _ui["sub"]["num"].text = _itemNum;
            }
            else
            {
               _ui["sub"]["num"].text = _itemNumMoney;
            }
         });
      }
      
      private function onScrollMove(e:* = null) : void
      {
         this.curList = this.lastPets.slice(this.scrollBar.index * 4,(this.scrollBar.index + 1) * 4);
         this.showAwards(this.curList);
      }
      
      private function showAwards(arr:Array) : void
      {
         var stateObj:Object = null;
         for(var j:int = 0; j < 4; j++)
         {
            if(j < arr.length)
            {
               stateObj = this.allPetState.getValue(arr[j].id);
               _ui["sub"]["pet_" + j].visible = true;
               _ui["sub"]["pet_" + j]["flag"].visible = stateObj && stateObj.state == 1;
               _ui["sub"]["pet_" + j]["flag1"].visible = stateObj && stateObj.state == 2;
               _ui["sub"]["pet_" + j]["con"].mid = arr[j].mosterurl;
               _ui["sub"]["pet_" + j]["pName"].text = arr[j].monstername;
               this.loadMonster(arr[j].mosterurl,0,_ui["sub"]["pet_" + j]["con"],180,300);
            }
            else
            {
               _ui["sub"]["pet_" + j].visible = false;
            }
         }
         this.selectPetIdx = -1;
      }
      
      override protected function updatePanel() : void
      {
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var openId:int = 0;
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               break;
            case "tip":
               ModuleManager.showAppModule("ElfAwakeningNewTipPanel",Math.min(this.curIndex,1));
               break;
            case "pclose":
               _ui["sub"].visible = false;
               break;
            case "info":
               ModuleManager.showAppModule("AdvancedPetInfoNewPanel",this.curList[pindex].mosterurl);
               break;
            case "btn_" + index:
               this.curIndex = index;
               break;
            case "obtn_" + index:
               this.oCurIndex = index;
               break;
            case "pinfo":
               ModuleManager.showAppModule("AdvancedPetInfoNewPanel",this.showPetInfo.mosterurl);
               break;
            case "pre":
               this.showMoneyPage(-1);
               break;
            case "next":
               this.showMoneyPage(1);
               break;
            case "go":
               openId = int(this.showPetInfo.id);
               StatManager.sendStat2014("20241129觉醒" + openId,"点击【前往试炼】按钮","2024精灵觉醒");
               this.hide();
               ModuleManager.showAppModule("ElfAwakeningNewFightPanel",openId);
               break;
            case "closeGk":
               doAction("alert2").then(function():void
               {
                  SocketConnection.sendByQueue(45831,[showPetInfo.id],function(e:SocketEvent):void
                  {
                     refreshOpenedPets();
                  });
               });
               break;
            case "openGkNew":
               if(this._itemNumMoney == 0)
               {
                  KTool.buyProductWithExchange(261148,14440,function():void
                  {
                     updateItem();
                     showOpenPetPanel(false);
                  });
                  return;
               }
               this.showOpenPetPanel(false);
               break;
            case "buy":
               KTool.buyProductWithExchange(261148,14440,function():void
               {
                  updateItem();
               });
               break;
            case "openList":
               this.showOpenPetPanel(false);
               break;
            case "openGkFree":
               if(this._itemNum == 0)
               {
                  return;
               }
               this.showOpenPetPanel();
               break;
            case "jxMoney":
               if(this._itemNumMoney == 0)
               {
                  KTool.buyProductWithExchange(261148,14440,function():void
                  {
                     SocketConnection.sendByQueue(45830,[curList[selectPetIdx].id,2],function(e:SocketEvent):void
                     {
                        _ui["sub"].visible = false;
                        refreshOpenedPets();
                     });
                  });
               }
               else
               {
                  doAction("alert").then(function():void
                  {
                     SocketConnection.sendByQueue(45830,[curList[selectPetIdx].id,2],function(e:SocketEvent):void
                     {
                        _ui["sub"].visible = false;
                        refreshOpenedPets();
                     });
                  });
               }
               break;
            case "jxFree":
               if(this._itemNum == 0)
               {
                  doAction("alarm6");
                  return;
               }
               StatManager.sendStat2014("20241129往期觉醒" + this.curList[this.selectPetIdx].id,"点击【开启觉醒】按钮","2024精灵觉醒");
               doAction("alert1").then(function():void
               {
                  SocketConnection.sendByQueue(45830,[curList[selectPetIdx].id,1],function(e:SocketEvent):void
                  {
                     _ui["sub"].visible = false;
                     refreshOpenedPets();
                  });
               });
               break;
            case "selectBtn":
               this.selectPetIdx = pindex;
         }
      }
      
      private function refreshOpenedPets() : void
      {
         ElfAwakeningNewController.instance.getAllState(function(arr:HashMap):void
         {
            allPetState = arr;
            _itemNum = ElfAwakeningNewController.instance.itemNum;
            timeStamp = ElfAwakeningNewController.instance.timeStamp;
            openedLastPetsFree = ElfAwakeningNewController.instance.getLastOpenPetsFree();
            openedLastPetsMoney = ElfAwakeningNewController.instance.getLastOpenPetsMoney();
            curIndex = curIndex;
            oCurIndex = oCurIndex;
            updateItem();
         });
      }
      
      private function showOpenPetPanel(free:Boolean = true) : void
      {
         this.curFree = free;
         _ui["sub"].visible = true;
         this.scrollBar.index = 0;
         this.scrollBar.totalLength = Math.ceil(this.lastPets.length / 4);
         if(free)
         {
            _ui["sub"]["mc"].gotoAndStop(1);
            _ui["sub"]["btnmc"].gotoAndStop(1);
            _ui["sub"]["num"].text = this._itemNum;
         }
         else
         {
            _ui["sub"]["mc"].gotoAndStop(2);
            _ui["sub"]["btnmc"].gotoAndStop(2);
            _ui["sub"]["num"].text = this._itemNumMoney;
         }
         this.onScrollMove();
      }
      
      private function loadMonster(monID:uint, skinid:int, container:DisplayObjectContainer, w:int = 0, h:int = 0, offX:int = 0, offY:int = 0) : void
      {
         ResourceManager.getResource(ClientConfig.getPetFightPath(monID,0,skinid),function(dis:DisplayObject):void
         {
            var mc:MovieClip = null;
            if(container["mid"] == monID)
            {
               DisplayUtil.removeAllChild(container as MovieClip);
               mc = dis as MovieClip;
               if(w != 0 && h != 0)
               {
                  CommonUI.equalScale(mc,w,h);
               }
               CommonUI.centerAlign(mc,new Sprite(),new Point(0,0));
               mc.x += offX;
               mc.y += offY;
               container.addChild(mc);
            }
         },"pet");
      }
      
      override public function hide() : void
      {
         EventManager.removeEventListener(RedSystemController.RED_UPDATED,this.showRed);
         for(var j:int = 0; j < 4; j++)
         {
            DisplayUtil.removeAllChild(_ui["sub"]["pet_" + j]["con"]);
         }
         if(Boolean(this.scrollBar))
         {
            this.scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
            this.scrollBar.destroy();
         }
         DisplayUtil.removeAllChild(_ui["pet"]["con"]);
         this.scrollBar = null;
         this.allPetState = null;
         this.openedLastPetsFree = null;
         this.openedLastPetsMoney = null;
         this.lastPets = null;
         this.nextPet = null;
         this.curPet = null;
         this.lastPetsState = null;
         this.curList = null;
         this.showPetInfo = null;
         super.hide();
      }
      
      public function get curIndex() : int
      {
         return this._curIndex;
      }
      
      public function set curIndex(value:int) : void
      {
         this._curIndex = value;
         for(var j:int = 0; j < 3; j++)
         {
            _ui["btnmc_" + j].gotoAndStop(this.curIndex == j ? 2 : 1);
         }
         this.showInfo();
      }
      
      private function showInfo() : void
      {
         var info:Object = null;
         _ui["oMc_0"].visible = false;
         _ui["oMc_1"].visible = false;
         _ui["pre"].visible = false;
         _ui["next"].visible = false;
         _ui["desMc"].visible = false;
         _ui["rBtnMc"].visible = false;
         _ui["pinfo"].visible = false;
         _ui["title"].visible = true;
         _ui["flag"].visible = false;
         _ui["tipBtn"].visible = false;
         _ui["itemMc"].visible = false;
         _ui["bg"].gotoAndStop(this.curIndex == 2 ? 2 : 1);
         _ui["line"].visible = this.curIndex == 0;
         switch(this.curIndex)
         {
            case 0:
               RedSystemController.instance.sendRedClickHandle(100);
               _ui["oMc_0"].visible = true;
               _ui["oMc_1"].visible = true;
               _ui["desMc"].visible = true;
               _ui["rBtnMc"].visible = true;
               _ui["title"].gotoAndStop(1);
               _ui["title"]["titleMc"].gotoAndStop(1);
               _ui["title"]["time"].visible = false;
               this.oCurIndex = this.oCurIndex;
               break;
            case 1:
               if(this.curPet == null)
               {
                  _ui["title"].visible = false;
                  return;
               }
               _ui["rBtnMc"].visible = true;
               _ui["pinfo"].visible = true;
               _ui["desMc"].visible = true;
               _ui["title"].gotoAndStop(1);
               _ui["title"]["mc"].visible = false;
               _ui["title"]["titleMc"].gotoAndStop(1);
               _ui["title"]["time"].visible = true;
               _ui["desMc"].gotoAndStop(3);
               _ui["rBtnMc"].gotoAndStop(1);
               _ui["desMc"]["txt"].text = ElfAwakeningNewXmlInfo.getDesByAid(this.curPet.id);
               if(Boolean(_ui["rBtnMc"]["red_3"]))
               {
                  _ui["rBtnMc"]["red_3"].visible = this.red3Show;
               }
               this.showPetInfo = this.curPet;
               break;
            case 2:
               _ui["title"].gotoAndStop(2);
               this.showPetInfo = this.nextPet;
         }
      }
      
      public function get selectPetIdx() : int
      {
         return this._selectPetIdx;
      }
      
      public function set selectPetIdx(value:int) : void
      {
         var stateObj:Object = null;
         this._selectPetIdx = value;
         for(var j:int = 0; j < 4; j++)
         {
            _ui["sub"]["pet_" + j]["sMc"].visible = j == this.selectPetIdx;
         }
         var jx:Boolean = true;
         if(this.selectPetIdx != -1)
         {
            stateObj = this.allPetState.getValue(this.curList[this.selectPetIdx].id);
            jx = stateObj.state > 0;
         }
         if(Boolean(_ui["sub"]["btnmc"]["jxFree"]))
         {
            CommonUI.setEnabled(_ui["sub"]["btnmc"]["jxFree"],this.selectPetIdx != -1 && !jx);
         }
         if(Boolean(_ui["sub"]["btnmc"]["jxMoney"]))
         {
            CommonUI.setEnabled(_ui["sub"]["btnmc"]["jxMoney"],this.selectPetIdx != -1 && !jx);
         }
      }
      
      public function get oCurIndex() : int
      {
         return this._oCurIndex;
      }
      
      public function set oCurIndex(value:int) : void
      {
         this._oCurIndex = value;
         for(var j:int = 0; j < 2; j++)
         {
            _ui["oMc_" + j].gotoAndStop(j == this.oCurIndex ? 2 : 1);
         }
         if(this.oCurIndex == 0)
         {
            _ui["pre"].visible = false;
            _ui["next"].visible = false;
            _ui["itemMc"].visible = false;
            if(this.openedLastPetsFree.length == 0)
            {
               _ui["rBtnMc"].gotoAndStop(2);
               _ui["desMc"].gotoAndStop(1);
               _ui["title"].visible = false;
               _ui["rBtnMc"]["num"].text = this._itemNum;
               _ui["tipBtn"].visible = true;
               this.showPetInfo = null;
            }
            else
            {
               _ui["title"].visible = true;
               _ui["rBtnMc"].gotoAndStop(1);
               _ui["desMc"].gotoAndStop(3);
               this.showPetInfo = this.openedLastPetsFree[0];
            }
            _ui["title"]["mc"].gotoAndStop(1);
            _ui["title"]["mc"].visible = true;
            if(Boolean(_ui["rBtnMc"]["openGkFree"]))
            {
               CommonUI.setEnabled(_ui["rBtnMc"]["openGkFree"],this._itemNum > 0);
            }
         }
         else
         {
            _ui["tipBtn"].visible = false;
            _ui["itemMc"].visible = true;
            if(this.openedLastPetsMoney.length == 0)
            {
               _ui["rBtnMc"].gotoAndStop(3);
               _ui["desMc"].gotoAndStop(2);
               _ui["title"].visible = false;
               this.showPetInfo = null;
            }
            else
            {
               _ui["title"].visible = true;
               _ui["rBtnMc"].gotoAndStop(1);
               _ui["desMc"].gotoAndStop(3);
               this.moneyPage = this.moneyPage;
               this.showMoneyPage();
            }
            _ui["title"]["mc"].gotoAndStop(2);
            _ui["title"]["mc"].visible = true;
         }
         if(Boolean(_ui["rBtnMc"]["red_3"]))
         {
            _ui["rBtnMc"]["red_3"].visible = false;
         }
      }
      
      private function showMoneyPage(value:int = 0) : void
      {
         this.moneyPage += value;
         if(this.moneyPage >= this.openedLastPetsMoney.length)
         {
            this.moneyPage = this.openedLastPetsMoney.length - 1;
         }
         if(this.moneyPage < 0)
         {
            this.moneyPage = 0;
         }
         _ui["pre"].visible = this.moneyPage > 0;
         _ui["next"].visible = this.moneyPage + 1 < this.openedLastPetsMoney.length;
         this.showPetInfo = this.openedLastPetsMoney[this.moneyPage];
      }
      
      public function get showPetInfo() : Object
      {
         return this._showPetInfo;
      }
      
      public function set showPetInfo(value:Object) : void
      {
         var offValue:Array = null;
         var tmpObj:Object = null;
         this._showPetInfo = value;
         DisplayUtil.removeAllChild(_ui["pet"]["con"]);
         _ui["bg"].visible = this.showPetInfo == null || this.curIndex == 2;
         _ui["pinfo"].visible = false;
         if(Boolean(this.showPetInfo))
         {
            _ui["pinfo"].visible = true;
            if(this.curIndex != 2)
            {
               _ui["title"]["titleMc"].gotoAndStop(this.showPetInfo.id);
               _ui["title"]["time"].gotoAndStop(this.showPetInfo.id);
            }
            if(Boolean(_ui["desMc"]["txt"]))
            {
               _ui["desMc"]["txt"].text = ElfAwakeningNewXmlInfo.getDesByAid(this.showPetInfo.id);
            }
            _ui["pet"]["con"].mid = this.showPetInfo.mosterurl;
            offValue = this.showPetInfo.pivot.split("_");
            this.loadMonster(this.showPetInfo.mosterurl,0,_ui["pet"]["con"],634,450,parseInt(offValue[0]),parseInt(offValue[1]));
            _ui["flag"].visible = false;
            _ui["desMc"].visible = true;
            _ui["rBtnMc"].visible = this.curIndex != 2;
            tmpObj = this.allPetState.getValue(this.showPetInfo.id);
            if(Boolean(tmpObj) && this.curIndex != 2)
            {
               if(this.showPetInfo.awakentype == 1 && !ElfAwakeningNewXmlInfo.gkOpen(this.showPetInfo.id))
               {
                  _ui["flag"].visible = true;
                  _ui["flag"].gotoAndStop(2);
                  _ui["rBtnMc"].visible = false;
                  _ui["desMc"].visible = false;
               }
               else if(tmpObj.state == 2)
               {
                  _ui["flag"].visible = true;
                  _ui["flag"].gotoAndStop(1);
                  _ui["rBtnMc"].visible = false;
                  _ui["desMc"].visible = false;
               }
            }
         }
      }
   }
}

