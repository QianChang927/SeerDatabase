package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.app2.systems.PetSkinController;
   import com.robot.core.manager.FitmentManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import com.robot.module.app.MainLineAdventure.MLGoodIcon;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class StarCafeAchievePanel extends ActivityModel
   {
      private var _scrollBar:UIScrollBar;
      
      private var mainContent:MovieClip;
      
      private var isStart:Boolean = false;
      
      private var lockedState:Array;
      
      private var hotCnt:int;
      
      private var sumPowerCost:int;
      
      private var sumDrinkTime:int;
      
      private var canGetVa:int;
      
      private var hasGetVa:int;
      
      private var hasGetFurniture:int;
      
      private var canGetArr:Array;
      
      private var hasGetArr:Array;
      
      private var achieveArr:Array;
      
      private var extraInfoArr:Array;
      
      private var teaCnt:*;
      
      private var tipsCnt:int = 28;
      
      private var goodIconArr:Array;
      
      private var sitemArr:Array;
      
      public function StarCafeAchievePanel()
      {
         this.extraInfoArr = [0,0,0,0,0,0,0,0,0,0,0,0,0];
         this.goodIconArr = [];
         this.sitemArr = [];
         super();
         resUrl = "2024/0927/StarCafeAchievePanel";
         configUrl = "2024/0927/StarCafeAchieveConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         for(var i:int = 1; i <= 4; i++)
         {
            ui["mcExchange_" + i].gotoAndStop(1);
            ui["mcExchange_" + i].mouseChildren = ui["mcExchange_" + i].mouseEnabled = false;
         }
         ui.txtTeaCnt.text = "";
         this.mainContent = ui.mainContent;
         var textMask:Sprite = new Sprite();
         var shape:Shape = new Shape();
         shape = new Shape();
         shape.graphics.beginFill(0,1);
         shape.graphics.drawRect(this.mainContent.x,this.mainContent.y,this.mainContent.width,this.mainContent.height);
         shape.graphics.endFill();
         textMask = new Sprite();
         textMask.addChild(shape);
         _ui.addChild(textMask);
         this.mainContent.mask = textMask;
         this._scrollBar = new UIScrollBar(_ui["hBar"]["slider"],_ui["hBar"]["track"],430,_ui["hBar"]["pointUp"],_ui["hBar"]["pointDown"]);
         this._scrollBar.wheelObject = _ui;
         this._scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
      }
      
      protected function onScrollMove(event:MouseEvent = null) : void
      {
         var startidx:int = int(this._scrollBar.index);
         this.mainContent.y = 144 - startidx;
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
         }
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var pName:String = null;
         var pIdx:int = 0;
         if(!this.isStart)
         {
            return;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               ModuleManager.showAppModule("StarCafeMainPanel");
               this.hide();
               break;
            case "btnExchange_" + index:
               if(this.teaCnt <= 0)
               {
                  Alarm.show("星缘茶包不足！");
                  return;
               }
               doAction("GetPrize",160 + index).then(refresh);
               if(index == 1)
               {
                  FitmentManager.getStorageInfo();
                  CommonUI.setEnabled(ui["btnExchange_" + 1],false);
                  ui["mcExchange_" + 1].gotoAndStop(2);
               }
               if(index == 2)
               {
                  CommonUI.setEnabled(ui["btnExchange_" + 2],false);
                  ui["mcExchange_" + 2].gotoAndStop(2);
               }
               break;
            case "btnTipGet":
               pName = e.target.parent.name;
               if(pName.indexOf("tip") >= 0)
               {
                  pIdx = int(pName.split("_")[1]);
                  doAction("GetPrize",100 + pIdx + 1).then(refresh);
                  e.target.parent.gotoAndStop(3);
               }
         }
      }
      
      override public function hide() : void
      {
         this.sitemArr = null;
         this.lockedState = null;
         this.canGetArr = null;
         this.hasGetArr = null;
         this.achieveArr = null;
         this.extraInfoArr = null;
         for(var i:int = 0; i < this.goodIconArr.length; i++)
         {
            this.goodIconArr[i].destory();
         }
         this.goodIconArr = [];
         this._scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         this._scrollBar.destroy();
         this._scrollBar = null;
         this.mainContent = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         var i:int = 0;
         this.lockedState = getValue("lockedState");
         this.hotCnt = getValue("hotCnt");
         this.sumPowerCost = getValue("sumPowerCost");
         this.sumDrinkTime = getValue("sumDrinkTime");
         this.canGetVa = getValue("canGetVa");
         this.hasGetVa = getValue("hasGetVa");
         this.hasGetFurniture = getValue("hasGetFurniture");
         if(this.canGetArr == null)
         {
            this.canGetArr = [];
         }
         for(i = 1; i <= 28; i++)
         {
            if(i >= this.canGetArr.length)
            {
               this.canGetArr.push(KTool.getBit(this.canGetVa,i));
            }
            else
            {
               this.canGetArr[i - 1] = KTool.getBit(this.canGetVa,i);
            }
         }
         if(this.hasGetArr == null)
         {
            this.hasGetArr = [];
         }
         for(i = 1; i <= 28; i++)
         {
            if(i >= this.hasGetArr.length)
            {
               this.hasGetArr.push(KTool.getBit(this.hasGetVa,i));
            }
            else
            {
               this.hasGetArr[i - 1] = KTool.getBit(this.hasGetVa,i);
            }
         }
         this.extraInfoArr[1] = this.clamp(this.hotCnt,0,200);
         this.extraInfoArr[2] = this.clamp(this.hotCnt,0,500);
         this.extraInfoArr[3] = this.clamp(this.hotCnt,0,1000);
         this.extraInfoArr[4] = this.clamp(this.hotCnt,0,2000);
         this.extraInfoArr[5] = this.clamp(this.hotCnt,0,3500);
         this.extraInfoArr[6] = this.clamp(this.sumPowerCost,0,10);
         this.extraInfoArr[7] = this.clamp(this.sumPowerCost,0,20);
         this.extraInfoArr[8] = this.clamp(this.sumPowerCost,0,30);
         this.extraInfoArr[9] = this.lockedState[0] + this.lockedState[1] + this.lockedState[2] + this.lockedState[3];
         this.extraInfoArr[10] = this.clamp(this.sumDrinkTime,0,15);
         this.extraInfoArr[11] = this.clamp(this.sumDrinkTime,0,30);
         this.extraInfoArr[12] = this.clamp(this.sumDrinkTime,0,50);
         this.teaCnt = getValue("teaCnt");
      }
      
      private function clamp(value:int, a:int, b:int) : int
      {
         if(value < a)
         {
            return a;
         }
         if(value > b)
         {
            return b;
         }
         return value;
      }
      
      private function updateDisplay() : void
      {
         var i:int = 0;
         if(this.achieveArr == null)
         {
            this.achieveArr = getValue("achieveArr");
            this.tipsCnt = this.achieveArr.length;
            this.buildContent();
            this._scrollBar.totalLength = this.mainContent.height + 100;
            this._scrollBar.index = 0;
            this._scrollBar.upDateScroll();
         }
         ui.txtTeaCnt.text = this.teaCnt;
         var f1c:int = int(FitmentManager.getItemNumByID(500033));
         if(f1c > 0)
         {
            CommonUI.setEnabled(ui["btnExchange_" + 1],false);
            ui["mcExchange_" + 1].gotoAndStop(2);
         }
         if(PetSkinController.instance.haveSkin(552))
         {
            CommonUI.setEnabled(ui["btnExchange_" + 2],false);
            ui["mcExchange_" + 2].gotoAndStop(2);
         }
         if(this.hasGetFurniture > 0)
         {
            CommonUI.setEnabled(ui["btnExchange_" + 3],false);
            ui["mcExchange_" + 3].gotoAndStop(2);
         }
         var ipos:int = 0;
         for(i = 0; i < this.sitemArr.length; i++)
         {
            if(this.canGetArr[i] == 1 && this.hasGetArr[i] == 0)
            {
               this.sitemArr[i].y = 35 + 72 * ipos;
               ipos++;
            }
            else
            {
               this.sitemArr[i].y = -1;
            }
         }
         for(i = 0; i < this.sitemArr.length; i++)
         {
            if(this.canGetArr[i] == 0 && this.hasGetArr[i] == 0)
            {
               if(this.sitemArr[i].y < 0)
               {
                  this.sitemArr[i].y = 35 + 72 * ipos;
                  ipos++;
               }
            }
         }
         for(i = 0; i < this.sitemArr.length; i++)
         {
            if(this.sitemArr[i].y < 0)
            {
               this.sitemArr[i].y = 35 + 72 * ipos;
               ipos++;
            }
         }
      }
      
      private function buildContent() : void
      {
         var i:int = 0;
         var sitem:MovieClip = null;
         var extraStr:String = null;
         var rewardStr:String = null;
         var rewardType:int = 0;
         var rewardId:int = 0;
         var rewardCnt:int = 0;
         var goodIcon:MLGoodIcon = null;
         var cls:Class = domain.getDefinition("tip") as Class;
         if(Boolean(cls))
         {
            DisplayUtil.removeAllChild(this.mainContent);
            for(i = 0; i < this.tipsCnt; i++)
            {
               sitem = new cls();
               this.mainContent.addChild(sitem);
               sitem.y = 35 + 72 * i;
               sitem.x = 229;
               sitem.name = "tip_" + i;
               if(this.hasGetArr[i] == 1)
               {
                  sitem.gotoAndStop(3);
               }
               else if(this.canGetArr[i] == 1)
               {
                  sitem.gotoAndStop(2);
               }
               else
               {
                  sitem.gotoAndStop(1);
               }
               sitem.txtTitle.text = this.achieveArr[i][0];
               extraStr = "";
               if(this.achieveArr[i][3] != 0)
               {
                  extraStr = this.extraInfoArr[this.achieveArr[i][3]] + "";
               }
               if(extraStr != "")
               {
                  sitem.txtContent.text = this.achieveArr[i][1].replace("X",extraStr);
               }
               else
               {
                  sitem.txtContent.text = this.achieveArr[i][1];
               }
               rewardStr = this.achieveArr[i][2];
               rewardType = int(rewardStr.split("_")[0]);
               rewardId = int(rewardStr.split("_")[1]);
               rewardCnt = int(rewardStr.split("_")[2]);
               sitem.txtItemCnt.text = rewardType == 1 ? rewardCnt : "";
               sitem.txtTitle.mouseEnabled = false;
               sitem.txtContent.mouseEnabled = false;
               sitem.txtItemCnt.mouseEnabled = false;
               DisplayUtil.removeAllChild(sitem.icon);
               if(rewardType == 1)
               {
                  goodIcon = new MLGoodIcon(rewardId,52,null,1,2);
               }
               else if(rewardType == 2)
               {
                  sitem.icon.x -= 40;
                  sitem.icon.y -= 12;
                  goodIcon = new MLGoodIcon(rewardId,52,[40,-20],10,3,false,rewardCnt);
               }
               this.goodIconArr.push(goodIcon);
               sitem.icon.addChild(goodIcon);
               this.sitemArr.push(sitem);
            }
            this.mainContent.height = 72 * this.tipsCnt;
         }
      }
   }
}

