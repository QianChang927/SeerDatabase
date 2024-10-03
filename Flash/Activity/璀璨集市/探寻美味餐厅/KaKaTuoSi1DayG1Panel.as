package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.InteractiveObject;
   import flash.filters.BitmapFilter;
   import flash.filters.ColorMatrixFilter;
   import org.taomee.effect.ColorFilter;
   
   public class KaKaTuoSi1DayG1Panel extends ActivityModel
   {
      private var ensureBtn:InteractiveObject;
      
      private var isStart:Boolean = false;
      
      private var targetArr:Array;
      
      private var likedislike:Array;
      
      private var curStateArr:Array;
      
      private var choosePosArr:Array;
      
      private var needStart:Boolean = false;
      
      private var isEnough:Boolean = false;
      
      public function KaKaTuoSi1DayG1Panel()
      {
         super();
         resUrl = "2022/0225/KaKaTuoSi1DayG1Panel";
         configUrl = "2022/0225/KaKaTuoSi1DayConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         for(var i:int = 1; i <= 18; i++)
         {
            _ui["c_" + i].gotoAndStop(1);
         }
         for(var j:int = 1; j <= 3; j++)
         {
            _ui["target_bar_" + j].gotoAndStop(1);
            _ui["num_mc_" + j].gotoAndStop(1);
            _ui["target_line_" + j].gotoAndStop(1);
         }
         _ui["word_mc"]["like_mc"].gotoAndStop(1);
         _ui["word_mc"]["dislike_mc"].gotoAndStop(1);
         this.ensureBtn = ui["ensure_btn"];
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
            if(this.needStart)
            {
               doAction("StartChoose").then(refresh);
            }
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
         var bName:String = null;
         var bIdx:int = 0;
         if(!this.isStart)
         {
            return;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               return;
            case "ensure_btn":
               if(this.isEnough)
               {
                  _ui["word_mc"].visible = false;
                  doAction("EndChoose").then(this.completeGame);
               }
               else
               {
                  Alarm.show("点餐尚未达到指标要求。");
               }
               break;
            case "choose_btn":
               bName = e.target.parent.name;
               bIdx = int(bName.split("_")[1]);
               doAction("ChooseFood",bIdx).then(refresh);
               break;
            case "cancel_btn":
               bName = e.target.parent.name;
               bIdx = int(bName.split("_")[1]);
               doAction("ChooseFood",bIdx).then(refresh);
         }
      }
      
      override public function hide() : void
      {
         ModuleManager.showAppModule("KaKaTuoSi1DayNewMainPanel");
         super.hide();
      }
      
      private function updateData() : void
      {
         this.targetArr = getValue("targetArr");
         this.likedislike = getValue("likedislike");
         this.curStateArr = getValue("curStateArr");
         this.choosePosArr = getValue("choosePosArr");
         if(this.targetArr[2] > 100)
         {
            this.targetArr[2] -= 100;
         }
         this.curStateArr[2] -= 100;
         if(this.curStateArr[2] < 0)
         {
            this.curStateArr[2] = 0;
         }
         this.needStart = false;
         if(this.targetArr[0] == 0 && this.targetArr[1] == 0 && this.targetArr[2] == 0)
         {
            this.needStart = true;
         }
         this.isEnough = this.curStateArr[0] >= this.targetArr[0] && this.curStateArr[1] >= this.targetArr[1] && this.curStateArr[2] >= this.targetArr[2];
      }
      
      private function updateDisplay() : void
      {
         for(var i:int = 1; i <= 18; i++)
         {
            _ui["c_" + i].gotoAndStop(this.choosePosArr[i - 1] + 1);
         }
         var adjust:int = 0;
         for(var j:int = 1; j <= 3; j++)
         {
            if(i == 1)
            {
               adjust = 0;
            }
            else
            {
               adjust = 1;
            }
            _ui["target_bar_" + j].gotoAndStop(this.curStateArr[j - 1] + adjust);
            _ui["num_mc_" + j].gotoAndStop(this.curStateArr[j - 1] + adjust);
            _ui["target_line_" + j].gotoAndStop(this.targetArr[j - 1] + 1);
         }
         if(!this.isEnough)
         {
            _ui["word_mc"]["like_mc"].gotoAndStop(this.likedislike[0]);
            _ui["word_mc"]["dislike_mc"].gotoAndStop(this.likedislike[1]);
         }
         this.greyBtn(!this.isEnough);
      }
      
      private function completeGame() : void
      {
         Alarm.show("完成点单！",this.hide);
      }
      
      private function greyBtn(bool:Boolean) : void
      {
         var f:BitmapFilter = null;
         var filters:Array = this.ensureBtn.filters;
         for(var i:int = filters.length - 1; i >= 0; i--)
         {
            f = filters[i];
            if(f is ColorMatrixFilter)
            {
               filters.splice(i,1);
            }
         }
         if(bool)
         {
            filters.push(ColorFilter.setGrayscale());
         }
         this.ensureBtn.filters = filters;
      }
   }
}

