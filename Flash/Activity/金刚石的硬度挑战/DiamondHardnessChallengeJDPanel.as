package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DiamondHardnessChallengeJDPanel extends ActivityModel
   {
      private var time:int;
      
      private var scrollBar:UIScrollBar;
      
      private var pets:Array;
      
      private var _curList:Array;
      
      private var _selectIdx:int;
      
      private var selectObj:Object;
      
      private var jdInfos:HashMap;
      
      private var maxTime:int;
      
      private var perPage:int = 8;
      
      private var jdCatchTime:int;
      
      public function DiamondHardnessChallengeJDPanel()
      {
         super();
         resUrl = "2024/1115/DiamondHardnessChallengeJDPanel";
         configUrl = "2024/1115/DiamondHardnessChallenge";
      }
      
      override public function show() : void
      {
         PetManager.getAllPetInfoByPetId([4694]).then(function(arr:Array):void
         {
            pets = arr;
            superShow();
         });
      }
      
      private function superShow() : void
      {
         super.show();
         _ui["mc"].gotoAndStop(1);
         this.scrollBar = new UIScrollBar(ui["itemMc"]["bar"]["slider"],ui["itemMc"]["bar"]["track"],1,ui["itemMc"]["bar"]["upArrow"],ui["itemMc"]["bar"]["downArrow"]);
         this.scrollBar.wheelObject = ui;
         this.scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         _ui["sub"].visible = false;
         _ui["sub1"].visible = false;
         for(var j:int = 0; j < 8; j++)
         {
            eventCom.addClickEvent(_ui["itemMc"]["mc_" + j],this.itemClickHandle);
         }
         this.scrollBar.index = 0;
         this.scrollBar.totalLength = Math.ceil(this.pets.length / this.perPage);
         _ui["mc1"].visible = this.pets.length == 0;
         _ui["itemMc"].visible = this.pets.length > 0;
         this.selectIdx = -1;
         _ui["itemMc"]["bar"].visible = this.pets.length > 8;
      }
      
      private function itemClickHandle(e:MouseEvent) : void
      {
         var tar:MovieClip = e.currentTarget as MovieClip;
         var ename:String = tar.name;
         var index:int = int(ename.split("_")[1]);
         this.selectIdx = index;
      }
      
      private function onScrollMove(e:* = null) : void
      {
         this._curList = this.pets.slice(this.scrollBar.index * this.perPage,(this.scrollBar.index + 1) * this.perPage);
         this.showAwards(this._curList);
      }
      
      private function showAwards(arr:Array) : void
      {
         var jdValue:Object = null;
         if(this.jdInfos == null)
         {
            return;
         }
         for(var j:int = 0; j < this.perPage; j++)
         {
            if(j < arr.length)
            {
               _ui["itemMc"]["mc_" + j].visible = true;
               _ui["itemMc"]["tMc_" + j].visible = true;
               jdValue = this.jdInfos.getValue(arr[j].catchTime);
               if(jdValue != null)
               {
                  _ui["itemMc"]["tMc_" + j].gotoAndStop(2);
                  _ui["itemMc"]["tMc_" + j]["txt"].text = jdValue.pf;
               }
               else
               {
                  _ui["itemMc"]["tMc_" + j].gotoAndStop(1);
               }
               if(this.jdCatchTime != 0)
               {
                  if(arr[j].catchTime == this.jdCatchTime)
                  {
                     this.selectIdx = j;
                  }
               }
            }
            else
            {
               _ui["itemMc"]["mc_" + j].visible = false;
               _ui["itemMc"]["tMc_" + j].visible = false;
            }
         }
         this.jdCatchTime = 0;
      }
      
      override protected function updatePanel() : void
      {
         var jdvalue:int = 0;
         var jdPf:int = 0;
         var pidx:int = 0;
         var pos:int = 0;
         var obj:Object = null;
         var value0:int = int(getValue("value0"));
         this.maxTime = value0 & 0xFF;
         this.time = value0 >> 8 & 0xFF;
         _ui["time"].text = this.maxTime - this.time;
         if(Boolean(this.jdInfos))
         {
            this.jdInfos.clear();
         }
         else
         {
            this.jdInfos = new HashMap();
         }
         for(var j:int = 0; j < 16; j++)
         {
            obj = {};
            jdvalue = int(getValue("value" + (1 + j)));
            obj.catchTime = jdvalue;
            pos = j % 4;
            pidx = j / 4;
            jdPf = int(getValue("value" + (17 + pidx)));
            obj.pf = jdPf >> pos * 8 & 0xFF;
            if(obj.catchTime != 0)
            {
               this.jdInfos.add(obj.catchTime,obj);
            }
         }
         this.pets.sort(this.sortFun);
         this.onScrollMove();
      }
      
      private function sortFun(a:*, b:*) : int
      {
         var jdValue:Object = this.jdInfos.getValue(a.catchTime);
         var jdValue1:Object = this.jdInfos.getValue(b.catchTime);
         if(jdValue == null)
         {
            return -1;
         }
         if(jdValue1 == null)
         {
            return 1;
         }
         return 0;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var jd:Boolean = false;
         var tmpInfo:Object = null;
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("DiamondHardnessChallengeMainPanel");
               break;
            case "pclose":
               _ui["sub"].visible = false;
               break;
            case "pclose1":
               _ui["sub1"].visible = false;
               break;
            case "tip":
               _ui["sub1"].visible = true;
               break;
            case "go":
               if(this.selectIdx == -1)
               {
                  doAction("alarm");
                  return;
               }
               if(this.time >= this.maxTime)
               {
                  doAction("alarm1");
                  return;
               }
               tmpInfo = this._curList[this.selectIdx];
               jd = this.jdInfos.getValue(tmpInfo.catchTime) != null;
               if(jd)
               {
                  doAction("alarm2");
                  return;
               }
               this.playMovie();
               break;
         }
      }
      
      private function playMovie() : void
      {
         LevelManager.closeAllMouseEvent();
         _ui["mc"].gotoAndStop(3);
         _ui["mc"]["movie"]["mc"].gotoAndStop(1);
         AnimateManager.playMcAnimate(_ui["mc"]["movie"]["mc"],1,"",function():void
         {
            var tmpInfo:Object = null;
            _ui["mc"].gotoAndStop(2);
            LevelManager.openMouseEvent();
            tmpInfo = _curList[selectIdx];
            SocketConnection.sendByQueue(41862,[2,tmpInfo.catchTime],function(e:SocketEvent):void
            {
               jdCatchTime = tmpInfo.catchTime;
               refresh();
               var bytea:ByteArray = e.data as ByteArray;
               showResult(bytea);
            });
         });
      }
      
      private function showResult(value:ByteArray) : void
      {
         _ui["sub"].visible = true;
         _ui["sub"]["txt2"].text = value.readUnsignedInt() + "";
         _ui["sub"]["txt"].text = value.readUnsignedInt() + "";
         _ui["sub"]["txt1"].text = value.readUnsignedInt() + "";
      }
      
      private function loadMonster(monID:uint, skinid:int, container:DisplayObjectContainer, w:Number = -1, h:Number = -1) : void
      {
         ResourceManager.getResource(ClientConfig.getPetFightPath(monID,0,skinid),function(dis:DisplayObject):void
         {
            var mc:MovieClip = null;
            if(container["mid"] == monID)
            {
               DisplayUtil.removeAllChild(container as MovieClip);
               mc = dis as MovieClip;
               DisplayUtil.stopAllMovieClip(mc);
               if(w != -1)
               {
                  CommonUI.equalScale(mc,w,h);
               }
               else
               {
                  CommonUI.equalScale(mc,container.parent.width,container.parent.height);
               }
               CommonUI.centerAlign(mc,new Sprite(),new Point(0,0));
               container.addChild(mc);
            }
         },"pet");
      }
      
      override public function hide() : void
      {
         if(Boolean(this.jdInfos))
         {
            this.jdInfos.clear();
         }
         this.jdInfos = null;
         if(Boolean(this.scrollBar))
         {
            this.scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
            this.scrollBar.destroy();
            this.scrollBar = null;
         }
         this.selectObj = null;
         this.pets = null;
         this._curList = null;
         super.hide();
      }
      
      public function get selectIdx() : int
      {
         return this._selectIdx;
      }
      
      public function set selectIdx(value:int) : void
      {
         this._selectIdx = value;
         if(this.selectIdx == -1)
         {
            _ui["mc"].gotoAndStop(1);
            this.selectObj = null;
         }
         else
         {
            this.selectObj = this._curList[this.selectIdx];
            _ui["mc"].gotoAndStop(2);
         }
         for(var j:int = 0; j < this.perPage; j++)
         {
            _ui["itemMc"]["mc_" + j].gotoAndStop(this.selectIdx == j ? 2 : 1);
         }
      }
   }
}

