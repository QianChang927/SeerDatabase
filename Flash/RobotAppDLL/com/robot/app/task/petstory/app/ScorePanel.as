package com.robot.app.task.petstory.app
{
   import com.robot.app.mapProcess.MapProcess_485;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.text.TextField;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class ScorePanel
   {
       
      
      private const PATH:String = ClientConfig.getResPath("module/ext/app/score.swf");
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _obj:Object;
      
      private var _titleList:Array;
      
      public function ScorePanel(param1:Object)
      {
         super();
         this._obj = param1;
         this._titleList = param1.titleList;
         this.loadPanel();
      }
      
      private function loadPanel() : void
      {
         if(!this._app)
         {
            this._loader = new MCLoader(this.PATH,LevelManager.topLevel,1,"正在加载成绩单");
            this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onComplete);
            this._loader.doLoad();
         }
         else
         {
            this.showPanel();
         }
      }
      
      private function onComplete(param1:MCLoadEvent) : void
      {
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("Score_UI") as Class)() as MovieClip;
         this._closeBtn = this._mainUI["closeBtn"];
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this.showPanel();
      }
      
      private function showPanel() : void
      {
         DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this._mainUI);
         LevelManager.closeMouseEvent();
         this.initMC();
      }
      
      private function initMC() : void
      {
         (this._mainUI["nameTxt"] as TextField).text = PetBookXMLInfo.getName(this._obj.monId);
         (this._mainUI["nameTxt"] as TextField).selectable = false;
         (this._mainUI["a_0"] as TextField).text = this._obj.hp;
         (this._mainUI["a_0"] as TextField).selectable = false;
         (this._mainUI["a_1"] as TextField).text = this._obj.atk;
         (this._mainUI["a_1"] as TextField).selectable = false;
         (this._mainUI["a_2"] as TextField).text = this._obj.sp_atk;
         (this._mainUI["a_2"] as TextField).selectable = false;
         (this._mainUI["a_3"] as TextField).text = this._obj.sp_def;
         (this._mainUI["a_3"] as TextField).selectable = false;
         (this._mainUI["a_4"] as TextField).text = this._obj.def;
         (this._mainUI["a_4"] as TextField).selectable = false;
         (this._mainUI["a_5"] as TextField).text = this._obj.speed;
         (this._mainUI["a_5"] as TextField).selectable = false;
         (this._mainUI["a_6"] as TextField).text = this._obj.gainExp;
         (this._mainUI["a_6"] as TextField).selectable = false;
         ResourceManager.getResource(ClientConfig.getPetSwfPath(this._obj.monId,this._obj.captTime),this.onPetComHandler,"pet");
         var _loc1_:uint = uint(this._obj.event);
         if(_loc1_ == 1)
         {
            (this._mainUI["outTxt"] as TextField).text = PetBookXMLInfo.getName(this._obj.monId) + "在这次的课程中非常调皮，因此获得的成果有些不尽人意哦！";
         }
         else if(_loc1_ == 2)
         {
            (this._mainUI["outTxt"] as TextField).text = PetBookXMLInfo.getName(this._obj.monId) + "在这次的课程中表现还不错哦，要再接再厉！";
         }
         else
         {
            (this._mainUI["outTxt"] as TextField).text = PetBookXMLInfo.getName(this._obj.monId) + "在这次的课程中非常乖巧努力，因此获得的成果有所提升哦！";
         }
         var _loc2_:uint = uint(this._obj.up);
         if(_loc2_ > 0)
         {
            (this._mainUI["outTxt"] as TextField).text = PetBookXMLInfo.getName(this._obj.monId) + "表现非常优秀，个体提升1";
         }
         if(this._obj.addExp == 1)
         {
            (this._mainUI["addExpTxt"] as TextField).visible = true;
            (this._mainUI["addExpTxt"] as TextField).selectable = false;
            (this._mainUI["outTxt"] as TextField).text = "你的精灵在六一期间，上课效果比以往提升了50%";
         }
         else
         {
            (this._mainUI["addExpTxt"] as TextField).visible = false;
         }
         (this._mainUI["outTxt"] as TextField).selectable = false;
         this.countScore(_loc1_);
      }
      
      private function countScore(param1:uint) : void
      {
         var _loc2_:uint = 0;
         switch(param1)
         {
            case 1:
               _loc2_ = uint(70 + uint(Math.random() * 10));
               break;
            case 2:
               _loc2_ = uint(80 + uint(Math.random() * 10));
               break;
            case 3:
               _loc2_ = uint(90 + uint(Math.random() * 10));
               break;
            default:
               _loc2_ = uint(70 + uint(Math.random() * 10));
         }
         var _loc3_:Array = String(_loc2_).split("");
         (this._mainUI["num_0"] as MovieClip).gotoAndStop(uint(_loc3_[0]) + 1);
         (this._mainUI["num_1"] as MovieClip).gotoAndStop(uint(_loc3_[1]) + 1);
      }
      
      private function onPetComHandler(param1:DisplayObject) : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:MovieClip = null;
         if(param1)
         {
            _loc2_ = param1 as MovieClip;
            _loc3_ = _loc2_.getChildAt(0) as MovieClip;
            _loc3_.gotoAndStop(1);
            _loc2_.x = 40;
            _loc2_.y = 50;
            _loc2_.scaleX = _loc2_.scaleY = 1.2;
            (this._mainUI["petCanvas"] as MovieClip).addChild(_loc2_);
         }
      }
      
      private function onCloseBtn(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._mainUI,false);
         LevelManager.openMouseEvent();
         this.destory();
         MapProcess_485.onPanelClose();
      }
      
      private function destory() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._closeBtn = null;
         this._app = null;
         this._loader = null;
         this._mainUI = null;
      }
   }
}
