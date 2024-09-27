package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import gs.TweenLite;
   import org.taomee.manager.EventManager;
   
   public class StarCafeSocialPanel extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var hotCnt:int;
      
      private var paperCnt:int;
      
      private var likePos1:Array;
      
      private var likePos2:Array;
      
      private var likeCnt1:Array;
      
      private var likeCnt2:Array;
      
      private var curPage:int = 0;
      
      private var minPage:int = 1;
      
      private var maxPage:int = 7;
      
      private var pagePosArr:Array;
      
      private var isFFF:Boolean = true;
      
      private var isInAAA:int = 0;
      
      private var isInAnim:Boolean = false;
      
      private var isInAnim2:Boolean = false;
      
      public function StarCafeSocialPanel()
      {
         this.pagePosArr = [0,4,7,11,15,19,22,26];
         super();
         resUrl = "2024/0927/StarCafeSocialPanel";
         configUrl = "2024/0927/StarCafeConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         var buffId:int = 0;
         super.show();
         ui.popp.visible = false;
         ui.mcContent.gotoAndStop(1);
         KTool.getMultiValue([121890],function(va:Array):void
         {
            ui.headFrame.visible = va[0] >= 2;
         });
         ui.txtHot.text = "";
         EventManager.addEventListener("RefreshStarCafeSocial",this.onPublish);
         buffId = 24486;
         if(buffId > 0)
         {
            if(BitBuffSetClass.getState(buffId) == 0)
            {
               DialogControl.showAllDilogs(163,1).then(function():void
               {
                  BitBuffSetClass.setState(buffId,1);
               });
            }
         }
      }
      
      private function onPublish(e:*) : void
      {
         Alarm.show("发布成功！");
         this.isFFF = true;
         this.curPage = 0;
         refresh();
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
         var btnName:String;
         var index:int;
         var pName:String = null;
         var pIdx:int = 0;
         if(!this.isStart)
         {
            return;
         }
         if(this.isInAnim)
         {
            return;
         }
         if(this.isInAnim2)
         {
            return;
         }
         btnName = e.target.name;
         index = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "closePop":
               ui.popp.visible = false;
               break;
            case "openPop":
               ui.popp.visible = visible;
               ui.popp.gotoAndStop(this.curPage);
               break;
            case "close":
               ModuleManager.showAppModule("StarCafeMainPanel");
               this.hide();
               break;
            case "btnPop":
               ModuleManager.showAppModule("StarCafeSocialSelectPop");
               break;
            case "btnLike":
               pName = e.target.parent.name;
               pIdx = int(pName.split("_")[1]);
               pName = pName.split("_")[0];
               this.isInAnim2 = true;
               AnimateManager.playMcAnimate(e.target.parent.mcLike,3,"ani",function():void
               {
                  if(pName == "mainLike")
                  {
                     if(likeCnt1 != null)
                     {
                        ++likeCnt1[pIdx - 1];
                     }
                     doAction("Like",20 + pIdx).then(refresh);
                  }
                  else
                  {
                     pIdx += 1;
                     if(likeCnt2 != null)
                     {
                        ++likeCnt2[pIdx - 1];
                     }
                     doAction("Like",30 + pIdx).then(refresh);
                  }
                  isInAnim2 = false;
               },false,true);
               StatManager.sendStat2014("0927星缘咖啡厅","经营指南活动中完成了1次点赞","2024运营活动");
               break;
            case "btnLast":
               if(this.curPage == this.minPage)
               {
                  return;
               }
               --this.curPage;
               this.updateDisplay();
               this.showAnim();
               break;
            case "btnNext":
               if(this.curPage == this.maxPage)
               {
                  return;
               }
               ++this.curPage;
               this.updateDisplay();
               this.showAnim();
               break;
         }
      }
      
      override public function hide() : void
      {
         this.pagePosArr = null;
         this.likePos1 = null;
         this.likePos2 = null;
         this.likeCnt1 = null;
         this.likeCnt2 = null;
         EventManager.removeEventListener("RefreshStarCafeSocial",this.onPublish);
         super.hide();
      }
      
      private function updateData() : void
      {
         var global1:* = undefined;
         var global2:* = undefined;
         this.hotCnt = getValue("hotCnt");
         this.paperCnt = getValue("paperCnt");
         this.likePos1 = getValue("likePos1");
         this.likePos2 = getValue("likePos2");
         if(this.curPage == 0)
         {
            this.curPage = this.paperCnt;
            if(this.curPage == 0)
            {
               this.curPage = 1;
            }
         }
         this.maxPage = this.paperCnt;
         if(this.likeCnt1 == null)
         {
            global1 = getValue("global1")[0];
            global2 = getValue("global2")[0];
            KTool.getGlobalSubkeyValues(global1,[1,2,3,4,5,6,7]).then(function(va:Array):void
            {
               likeCnt1 = va;
               KTool.getGlobalSubkeyValues(global2,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]).then(function(va2:Array):void
               {
                  likeCnt2 = va2;
                  updateDisplay();
               });
            });
         }
      }
      
      private function updateDisplay() : void
      {
         ui.btnLast.visible = this.curPage != this.minPage;
         ui.btnNext.visible = this.curPage != this.maxPage;
         ui.mcContent.gotoAndStop(this.curPage);
         ui.txtHot.text = this.hotCnt;
         if(Boolean(ui.mcContent["mainLike_" + this.curPage]))
         {
            if(this.likeCnt1 != null)
            {
               this.setLike(ui.mcContent["mainLike_" + this.curPage],this.likeCnt1[this.curPage - 1],this.likePos1[this.curPage - 1] == 1);
            }
            else
            {
               ui.mcContent["mainLike_" + this.curPage].visible = false;
            }
         }
         for(var i:int = int(this.pagePosArr[this.curPage - 1]); i < this.pagePosArr[this.curPage]; i++)
         {
            if(Boolean(ui.mcContent["mcLike_" + i]))
            {
               if(this.likeCnt2 != null)
               {
                  this.setLike(ui.mcContent["mcLike_" + i],this.likeCnt2[i],this.likePos2[i] == 1);
               }
               else
               {
                  ui.mcContent["mcLike_" + i].visible = false;
               }
            }
         }
         if(this.isFFF)
         {
            this.isFFF = false;
            this.showAnim();
         }
      }
      
      private function setLike(mcLike:MovieClip, value:int, hasGot:Boolean) : void
      {
         if(mcLike == null)
         {
            return;
         }
         mcLike.visible = true;
         if(value > 99999)
         {
            mcLike.txtLike.text = "10w+";
         }
         else if(value > 9999)
         {
            mcLike.txtLike.text = (value / 10000).toFixed(1) + "w";
         }
         else if(value > 999)
         {
            mcLike.txtLike.text = (value / 1000).toFixed(1) + "k";
         }
         else
         {
            mcLike.txtLike.text = value + "";
         }
         mcLike.mcLike.gotoAndStop(hasGot ? 2 : 1);
         mcLike.mcLike.mouseEnabled = false;
         mcLike.txtLike.mouseEnabled = false;
         mcLike.btnLike.mouseEnabled = !hasGot;
      }
      
      private function showAnim() : void
      {
         var index:int;
         var i:int;
         var targetY:Number = NaN;
         var targetYZZ:Number = NaN;
         var delayTime:Number = 0;
         for(index = 1; index <= 5; index++)
         {
            if(Boolean(_ui["mcContent"]["block_" + index]))
            {
               delayTime += 0.05;
               targetY = Number(_ui["mcContent"]["block_" + index].y);
               _ui["mcContent"]["block_" + index].y += 100;
               _ui["mcContent"]["block_" + index].alpha = 0;
               TweenLite.to(_ui["mcContent"]["block_" + index],0.21,{
                  "y":targetY,
                  "alpha":1,
                  "delay":delayTime,
                  "onComplete":function():void
                  {
                     --isInAAA;
                     isInAnim = isInAAA > 0;
                  }
               });
               ++this.isInAAA;
               this.isInAnim = this.isInAAA > 0;
            }
         }
         delayTime = 0;
         for(i = int(this.pagePosArr[this.curPage - 1]); i < this.pagePosArr[this.curPage]; i++)
         {
            if(Boolean(ui.mcContent["mcLike_" + i]))
            {
               delayTime += 0.05;
               targetYZZ = Number(ui.mcContent["mcLike_" + i].y);
               ui.mcContent["mcLike_" + i].y += 100;
               ui.mcContent["mcLike_" + i].alpha = 0;
               TweenLite.to(ui.mcContent["mcLike_" + i],0.2,{
                  "y":targetYZZ,
                  "alpha":1,
                  "delay":delayTime
               });
            }
         }
      }
   }
}

